import { Unsnip } from '../types'
import { destroyObserver } from '../observer/destroyObserver'

export const unsnip: Unsnip = (element) => {
  const elState = window.__JsSnipState.get(element)
  element.textContent = elState.fullText
  destroyObserver(element)

  element.style.display = ''
  element.style.webkitLineClamp = ''
  element.style.webkitBoxOrient = ''
  element.style.overflow = ''
}
