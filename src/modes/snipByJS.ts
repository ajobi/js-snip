import { getLines } from '../utils'
import { ElementState } from '../utils/elementState'

export const snipByJS = (element: HTMLElement, state: ElementState): void => {
  const { lines, midWord, fullText, ellipsis } = state

  const separators = midWord ? ['. ', ', ', ' ', ''] : ['. ', ', ', ' ']

  element.textContent = fullText
  element.style.display = ''
  element.style.webkitLineClamp = ''
  element.style.webkitBoxOrient = ''
  element.style.overflow = ''

  if (lines <= 0 || getLines(element) <= lines) {
    return
  }

  const snipProgress = {
    unprocessed: fullText,
    processed: '',
  }

  separators.forEach((separator) => {
    for (const chunk of snipProgress.unprocessed.split(separator)) {
      element.textContent = `${snipProgress.processed}${chunk}${separator}${ellipsis}`

      if (getLines(element) > lines) {
        snipProgress.unprocessed = chunk
        break
      }

      snipProgress.processed = `${snipProgress.processed}${chunk}${separator}`
    }
  })

  element.textContent = `${snipProgress.processed.trim()}${ellipsis}`
}
