import { Snip } from '../types'
import { defaultOptions } from '../defaultOptions'
import { snipByCSS, snipByJS } from '../methods'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState } from '../utils'

export const snipText = (element: HTMLElement): void => {
  const elementState = getState(element)

  if (elementState.method === 'css') {
    snipByCSS(element)
    return
  }

  if (elementState.method === 'js') {
    snipByJS(element)
    elementState.prevWidth = element.clientWidth
    elementState.prevHeight = element.clientHeight
  }
}

export const snip: Snip = (element, options) => {
  const isFirstSnip = !hasState(element)
  let elState = getState(element)

  const prevLines = elState?.lines
  const prevMethod = elState?.method
  const prevFullText = elState?.fullText

  elState = {
    ...defaultOptions,
    ...elState,
    ...options,
    fullText: isFirstSnip ? element.textContent : prevFullText
  }

  setState(element, elState)

  const needsObserver = elState.method === 'js' && typeof ResizeObserver !== 'undefined'
  const needsSnipping = (prevLines !== elState.lines) || (prevMethod !== elState.method && elState.method === 'css')

  if (isFirstSnip) {
    needsObserver ? addObserver(element) : snipText(element)
  } else {
    needsObserver ? addObserver(element) : destroyObserver(element)
    needsSnipping && snipText(element)
  }
}
