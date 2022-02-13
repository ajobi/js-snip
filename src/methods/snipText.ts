import { getState } from '../utils'
import { snipByCSS } from './snipByCSS'
import { snipByJS } from './snipByJS'

export const snipText = (element: HTMLElement): void => {
  const state = getState(element)

  if (state.method === 'css') {
    snipByCSS(element, state)
  }

  if (state.method === 'js') {
    snipByJS(element, state)
  }

  state.prevWidth = element.clientWidth
  state.prevHeight = element.clientHeight
}
