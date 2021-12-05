import { ElementState } from '../utils/elementState'

// https://css-tricks.com/almanac/properties/l/line-clamp/
export const snipByCSS = (element: HTMLElement, state: ElementState): void => {
  const { lines, fullText } = state

  element.textContent = fullText
  element.style.display = '-webkit-box'
  element.style.webkitLineClamp = lines.toString()
  element.style.webkitBoxOrient = 'vertical'
  element.style.overflow = 'hidden'
}
