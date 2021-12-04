import { snipText } from '../snip/snip'

export const addObserver = (el: HTMLElement): void => {
  const elState = window.__JsSnipState.get(el)

  const observer = elState.observer || new ResizeObserver(() => {
    if (el.clientWidth !== elState.prevWidth || el.clientHeight !== elState.prevHeight) {
      snipText(el)
    }
  })

  observer.observe(el)
  elState.observer = observer
}
