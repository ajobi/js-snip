import { SnipMethod } from "./interface";

// https://css-tricks.com/almanac/properties/l/line-clamp/
export const snipByCSS: SnipMethod = (el, options) => {
  const { fullText, maxLines } = options

  el.textContent = fullText
  el.style.display = '-webkit-box'
  el.style.webkitLineClamp = maxLines.toString()
  el.style.webkitBoxOrient = 'vertical'
  el.style.overflow = 'hidden'
}
