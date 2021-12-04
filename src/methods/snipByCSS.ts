import { ElementState } from '../types'

// https://css-tricks.com/almanac/properties/l/line-clamp/
export const snipByCSS = (element: HTMLElement, elementState: ElementState): void => {
  const { maxLines, fullText } = elementState

  element.textContent = fullText
  element.style.display = '-webkit-box'
  element.style.webkitLineClamp = maxLines.toString()
  element.style.webkitBoxOrient = 'vertical'
  element.style.overflow = 'hidden'
}
