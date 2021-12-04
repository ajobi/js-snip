import { getLines } from '../utils'
import { ElementState } from '../types'

export const snipByJS = (element: HTMLElement, elementState: ElementState): void => {
  const { maxLines, midWord, fullText, ellipsis } = elementState

  const separators = midWord ? ['. ', ', ', ' ', ''] : ['. ', ', ', ' ']

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
