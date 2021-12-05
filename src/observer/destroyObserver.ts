import { getState } from '../utils'

export const destroyObserver = (el: HTMLElement): void => {
  const elState = getState(el)

  elState.observer && elState.observer.disconnect()
  elState.observer && delete elState.prevWidth
  elState.observer && delete elState.prevHeight
  elState.observer && delete elState.observer
}
