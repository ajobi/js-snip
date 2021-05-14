import { Snip } from '../snip/interface'

// https://css-tricks.com/almanac/properties/l/line-clamp/
export const snipByCSS: Snip = (element, options) => {
  const { maxLines } = options

  const fullText = !element.dataset.fullText || element.dataset.fullText !== element.textContent
    ? element.textContent
    : element.dataset.fullText

  element.dataset.fullText = fullText

  element.textContent = fullText
  element.style.display = '-webkit-box'
  element.style.webkitLineClamp = maxLines.toString()
  element.style.webkitBoxOrient = 'vertical'
  element.style.overflow = 'hidden'
}