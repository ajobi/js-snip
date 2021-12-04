import { snip } from '../snip/snip'

export const addObserver = (el: HTMLElement): void => {
  const elState = window.__JsSnipState.elementMap.get(el)

  const observer = elState.observer || new ResizeObserver(() => {
    if (el.clientWidth !== elState.prevWidth || el.clientHeight !== elState.prevHeight) {
      snip(el, elState)
    }
  })

  observer.observe(el)
  elState.observer = observer
}
