import { getState } from '../utils'

export const addObserver = (element: HTMLElement, onResize: () => void): void => {
  const state = getState(element)

  const observer =
    state.observer ||
    new ResizeObserver(() => {
      if (element.clientWidth !== state.prevWidth || element.clientHeight !== state.prevHeight) {
        onResize()
        state.prevWidth = element.clientWidth
        state.prevHeight = element.clientHeight
      }
    })

  observer.observe(element)
  state.observer = observer
}
