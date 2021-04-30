import { getLines } from "../utils/getLines";
import { SnipMethod } from "./interface";

const defaultSeparators = ['. ', ', ', ' ', '']
const defaultEllipsis = '.\u200A.\u200A.'

export const snipByJS: SnipMethod = (element, options) => {
  const { fullText, maxLines, ellipsis = defaultEllipsis, separators = defaultSeparators } = options

  element.textContent = fullText
  element.style.display = null
  element.style.webkitLineClamp = null
  element.style.webkitBoxOrient = null
  element.style.overflow = null

  if (maxLines <= 0 || getLines(element) <= maxLines) {
    return
  }

  const snipProgress = {
    unprocessed: fullText,
    processed: ''
  }

  separators.forEach(separator => {
    for (const chunk of snipProgress.unprocessed.split(separator)) {
      element.textContent = `${snipProgress.processed}${chunk}${separator}${ellipsis}`

      if (getLines(element) > maxLines) {
        snipProgress.unprocessed = chunk
        break
      }

      snipProgress.processed = `${snipProgress.processed}${chunk}${separator}`
    }
  })

  element.textContent = `${snipProgress.processed.trim()}${ellipsis}`
}
