import { getLines, getState } from '../utils'
import { snipByCSS } from './snipByCSS'
import { snipByJS } from './snipByJS'
import { unsnipElement } from '../snip/unsnip'

export const snipText = (element: HTMLElement): void => {
  const state = getState(element)

  unsnipElement(element)
  const linesBefore = getLines(element)

  if (state.method === 'css') {
    snipByCSS(element, state)
  }

  if (state.method === 'js') {
    snipByJS(element, state)
  }

  state.hasEllipsis = getLines(element) < linesBefore
}
