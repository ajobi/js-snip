import { getLines } from '../utils'
import { Snip } from '../types'

const defaultEllipsis = '.\u200A.\u200A.'
const defaultMidWord = true

export const snipByJS: Snip = (element, options) => {
  const { maxLines, ellipsis = defaultEllipsis, midWord = defaultMidWord } = options

  const separators = midWord ? ['. ', ', ', ' ', ''] : ['. ', ', ', ' ']

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
