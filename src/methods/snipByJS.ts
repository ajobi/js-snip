import { getLines } from '../utils/getLines'
import { Snip } from './interface'

const defaultSeparators = ['. ', ', ', ' ', '']
const defaultEllipsis = '.\u200A.\u200A.'

export const snipByJS: Snip = (element, options) => {
  const { maxLines, ellipsis = defaultEllipsis, separators = defaultSeparators } = options

  const fullText = element.dataset.fullText ?? element.textContent
  element.dataset.fullText = fullText

  element.textContent = fullText
  element.style.display = ''
  element.style.webkitLineClamp = ''
  element.style.webkitBoxOrient = ''
  element.style.overflow = ''

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
