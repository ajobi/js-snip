import { defaultOptions } from '../defaultOptions'

export const parseMaxLines = (lines: unknown): number => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const parsedMaxLines = parseInt(lines)

  if (!isNaN(parsedMaxLines)) {
    return parsedMaxLines
  }

  return defaultOptions.maxLines
}
