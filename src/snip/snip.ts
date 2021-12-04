import { Snip } from '../types'
import { defaultOptions } from '../defaultOptions'
import { snipByCSS, snipByJS } from '../methods'
import { addObserver, destroyObserver } from '../observer'

export const snipText = (element: HTMLElement): void => {
  const elementState = window.__JsSnipState.get(element)

  if (elementState.method === 'css') {
    snipByCSS(element, elementState)
    return
  }

  if (elementState.method === 'js') {
    snipByJS(element, elementState)
    elementState.prevWidth = element.clientWidth
    elementState.prevHeight = element.clientHeight
  }
}

export const snip: Snip = (element, options) => {
  if (!window.__JsSnipState) {
    window.__JsSnipState = new WeakMap()
  }

  const elState = {
    ...defaultOptions,
    ...(window.__JsSnipState.get(element) || {}),
    ...options
  }

  const isFirstSnip = !window.__JsSnipState.get(element)
  if (isFirstSnip) {
    elState.fullText = element.textContent
  }

  window.__JsSnipState.set(element, elState)

  if (elState.method === 'js') {
    addObserver(element)
    snipByJS(element, elState)
  } else {
    destroyObserver(element)
    snipByCSS(element, elState)
  }
}
