import { defaultOptions } from '../defaultOptions'

export const parseTextContent = (textContent: unknown): string => {
  if (typeof textContent === 'string') {
    return textContent
  }

  if (typeof textContent === 'number') {
    return textContent.toString()
  }

  return defaultOptions.textContent
}
