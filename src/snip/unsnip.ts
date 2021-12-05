import { Unsnip } from '../types'
import { destroyObserver } from '../observer'
import { deleteState, getState } from '../utils'

export const unsnip: Unsnip = (element) => {
  const elState = getState(element)

  element.textContent = elState.fullText
  element.style.display = ''
  element.style.webkitLineClamp = ''
  element.style.webkitBoxOrient = ''
  element.style.overflow = ''

  destroyObserver(element)
  deleteState(element)
}
