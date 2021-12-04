import { defaultOptions } from '../defaultOptions'

export const parseMaxLines = (lines: unknown): number => {
  const parsedMaxLines = parseInt(lines.toString())

  if (!isNaN(parsedMaxLines)) {
    return parsedMaxLines
  }

  return defaultOptions.maxLines
}
