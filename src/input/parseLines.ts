import { defaultOptions } from '../defaultOptions'

export const parseLines = (lines: unknown): number => {
  const parsedMaxLines = parseInt(lines.toString())

  if (!isNaN(parsedMaxLines)) {
    return parsedMaxLines
  }

  return defaultOptions.lines
}
