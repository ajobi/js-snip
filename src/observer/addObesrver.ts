import { snipText } from '../methods'
import { getState } from '../utils'

export const addObserver = (el: HTMLElement): void => {
  const elState = getState(el)

  const observer =
    elState.observer ||
    new ResizeObserver(() => {
      if (el.clientWidth !== elState.prevWidth || el.clientHeight !== elState.prevHeight) {
        console.log('Snipping')
        snipText(el)
      }
    })

  observer.observe(el)
  elState.observer = observer
}
