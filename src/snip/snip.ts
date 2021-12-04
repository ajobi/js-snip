import { Snip } from '../types'
import { defaultOptions } from '../defaultOptions'
import { snipByCSS } from '../methods/snipByCSS'
import { snipByJS } from '../methods/snipByJS'
import { addObserver } from '../observer/addObesrver'
import { destroyObserver } from '../observer/destroyObserver'

export const snip: Snip = (element, options) => {
  if (!window.__JsSnipState) {
    window.__JsSnipState = {
      elementMap: new WeakMap()
    }
  }

  const elState = {
    ...defaultOptions,
    ...(window.__JsSnipState.elementMap.get(element) || {}),
    ...options
  }

  window.__JsSnipState.elementMap.set(element, elState)

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
