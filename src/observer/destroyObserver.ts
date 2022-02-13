import { getState, setState } from '../utils'

export const destroyObserver = (element: HTMLElement): void => {
  const newState = { ...getState(element) }

  newState?.observer && newState?.observer.disconnect()
  newState?.observer && delete newState?.prevWidth
  newState?.observer && delete newState?.prevHeight
  newState?.observer && delete newState?.observer

  setState(element, newState)
}
