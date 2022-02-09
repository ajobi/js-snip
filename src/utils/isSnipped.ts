import { getState } from './elementState'

export const isSnipped = (element: HTMLElement): boolean => {
  const elState = getState(element)

  if (elState?.method === 'js') {
    return elState.fullText === element.textContent
  }

  if (elState?.method === 'css') {
    return false
  }

  return false
}
