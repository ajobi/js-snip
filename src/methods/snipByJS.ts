import { getLines, getState } from '../utils'

export const snipByJS = (element: HTMLElement): void => {
  const { lines, midWord, fullText, ellipsis } = getState(element)

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
    processed: ''
  }

  separators.forEach(separator => {
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
