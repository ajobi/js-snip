import { Snip } from '../types'
import { defaultOptions } from '../defaultOptions'
import { snipByCSS, snipByJS } from '../methods'
import { addObserver, destroyObserver } from '../observer'

export const snip: Snip = (element, options) => {
  if (!window.__JsSnipState) {
    window.__JsSnipState = new WeakMap()
  }

  const elState = {
    ...defaultOptions,
    ...(window.__JsSnipState.get(element) || {}),
    ...options
  }

  window.__JsSnipState.set(element, elState)

  if (elState.method === 'js') {
    addObserver(element)
    snipByJS(element, elState)
    elState.prevWidth = element.clientWidth
    elState.prevHeight = element.clientHeight
  } else {
    destroyObserver(element)
    snipByCSS(element, elState)
  }
}
