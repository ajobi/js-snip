import { getState } from '../utils'
import { snipByCSS } from './snipByCSS'
import { snipByJS } from './snipByJS'

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
