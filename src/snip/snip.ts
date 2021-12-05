import { Snip } from '../types'
import { defaultOptions } from '../defaultOptions'
import { snipByCSS, snipByJS } from '../methods'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState } from '../utils'

export const snipText = (element: HTMLElement): void => {
  const elementState = getState(element)

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
  const isFirstSnip = !hasState(element)
  let elState = getState(element)

  const prevMaxlines = elState?.maxLines
  const prevMethod = elState?.method
  const prevFullText = elState?.fullText

  elState = {
    ...defaultOptions,
    ...elState,
    ...options,
    fullText: isFirstSnip ? element.textContent : prevFullText
  }

  setState(element, elState)

  const needsObserver = elState.method === 'js'
  const needsSnipping = (prevMaxlines !== elState.maxLines) || (prevMethod !== elState.method && elState.method === 'css')

  if (isFirstSnip) {
    needsObserver && typeof ResizeObserver !== 'undefined' ? addObserver(element) : snipText(element)
  } else {
    needsObserver && typeof ResizeObserver !== 'undefined' ? addObserver(element) : destroyObserver(element)
    needsSnipping && snipText(element)
  }
}
