import { getState, setState } from '../utils'

export const addObserver = (element: HTMLElement, onResize?: () => void): void => {
  const state = getState(element)

  const observer =
    state.observer ||
    new ResizeObserver(() => {
      const state = getState(element)
      if (element.clientWidth !== state.prevWidth || element.clientHeight !== state.prevHeight) {
        onResize()
        const newState = { ...state }
        newState.prevWidth = element.clientWidth
        newState.prevHeight = element.clientHeight
        setState(element, newState)
      }
    })

  observer.observe(element)
  setState(element, { ...state, observer })
}
