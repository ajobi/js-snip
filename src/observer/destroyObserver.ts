import { getState } from '../utils'

export const destroyObserver = (element: HTMLElement): void => {
  const state = getState(element)

  state?.observer && state?.observer.disconnect()
  state?.observer && delete state?.prevWidth
  state?.observer && delete state?.prevHeight
  state?.observer && delete state?.observer
}
