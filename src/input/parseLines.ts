import { defaultOptions } from '../defaultOptions'

export const parseLines = (lines: unknown): number => {
  if (typeof lines === 'number') {
    return parseInt(lines.toString())
  }

  if (typeof lines === 'string') {
    const parsedMaxLines = parseInt(lines)

    if (!isNaN(parsedMaxLines)) {
      return parsedMaxLines
    }
  }

  return defaultOptions.lines
}
