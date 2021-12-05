import { snipText } from '../snip/snip'
import { getState } from '../utils'

export const addObserver = (el: HTMLElement): void => {
  const elState = getState(el)

  const observer = elState.observer || new ResizeObserver(() => {
    if (el.clientWidth !== elState.prevWidth || el.clientHeight !== elState.prevHeight) {
      snipText(el)
    }
  })

  observer.observe(el)
  elState.observer = observer
}
