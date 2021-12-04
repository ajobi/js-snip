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

  let elState = (window.__JsSnipState.get(element) || {})

  const prevMaxlines = elState.maxLines
  const prevMethod = elState.method

  elState = {
    ...defaultOptions,
    ...elState,
    ...options
  }

  const isFirstSnip = !window.__JsSnipState.get(element)
  if (isFirstSnip) {
    elState.fullText = element.textContent
  }

  window.__JsSnipState.set(element, elState)

  const needsObserver = elState.method === 'js'
  const needsSnipping = (prevMaxlines !== elState.maxLines) || (prevMethod !== elState.method && elState.method === 'css')

  if (isFirstSnip) {
    needsObserver && typeof ResizeObserver !== 'undefined' ? addObserver(element) : snipText(element)
  } else {
    needsObserver && typeof ResizeObserver !== 'undefined' ? addObserver(element) : destroyObserver(element)
    needsSnipping && snipText(element)
  }
}
