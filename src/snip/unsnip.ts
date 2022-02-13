import { Unsnip } from '../types'
import { destroyObserver } from '../observer'
import { deleteState, getState } from '../utils'

export const unsnipElement: Unsnip = (element) => {
  const state = getState(element)

  element.textContent = state?.fullText ?? element.textContent
  element.style.display = ''
  element.style.webkitLineClamp = ''
  element.style.webkitBoxOrient = ''
  element.style.overflow = ''
}

export const unsnip: Unsnip = (element) => {
  unsnipElement(element)

  destroyObserver(element)
  deleteState(element)
}
