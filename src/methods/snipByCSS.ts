import { getState } from '../utils'

// https://css-tricks.com/almanac/properties/l/line-clamp/
export const snipByCSS = (element: HTMLElement): void => {
  const { lines, fullText } = getState(element)

  element.textContent = fullText
  element.style.display = '-webkit-box'
  element.style.webkitLineClamp = lines.toString()
  element.style.webkitBoxOrient = 'vertical'
  element.style.overflow = 'hidden'
}
