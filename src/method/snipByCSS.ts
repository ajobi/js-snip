import { SnipMethod } from "./interface";

// https://css-tricks.com/almanac/properties/l/line-clamp/
export const snipByCSS: SnipMethod = (element, options) => {
  const { fullText, maxLines } = options

  element.textContent = fullText
  element.style.display = '-webkit-box'
  element.style.webkitLineClamp = maxLines.toString()
  element.style.webkitBoxOrient = 'vertical'
  element.style.overflow = 'hidden'
}
