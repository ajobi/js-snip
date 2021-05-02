import { Unsnip } from './interface'

export const unsnip: Unsnip = (element) => {
  element.textContent = element.dataset.fullText
  element.removeAttribute('data-full-text')

  element.style.display = ''
  element.style.webkitLineClamp = ''
  element.style.webkitBoxOrient = ''
  element.style.overflow = ''
}
