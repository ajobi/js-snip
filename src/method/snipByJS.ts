import { elementLines } from "../utils/elementLines";
import { SnipMethod } from "./interface";

const defaultSeparators = ['. ', ', ', ' ', '']
const defaultEllipsis = '.\u200A.\u200A.'

export const snipByJS: SnipMethod = (el, options) => {
  const { fullText, maxLines, ellipsis = defaultEllipsis, separators = defaultSeparators } = options

  el.textContent = fullText
  el.style.display = null
  el.style.webkitLineClamp = null
  el.style.webkitBoxOrient = null
  el.style.overflow = null

  if (maxLines <= 0 || elementLines(el) <= maxLines) {
    return
  }

  const snipProgress = {
    unprocessed: fullText,
    processed: ''
  }

  separators.forEach(separator => {
    for (const chunk of snipProgress.unprocessed.split(separator)) {
      el.textContent = `${snipProgress.processed}${chunk}${separator}${ellipsis}`

      if (elementLines(el) > maxLines) {
        snipProgress.unprocessed = chunk
        break
      }

      snipProgress.processed = `${snipProgress.processed}${chunk}${separator}`
    }
  })

  el.textContent = `${snipProgress.processed.trim()}${ellipsis}`
}
