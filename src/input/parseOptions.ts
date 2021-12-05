import { SnipOptions } from '../types'
import { defaultOptions } from '../defaultOptions'
import { parseMethod, parseLines, parseEllipsis, parseMidWord } from './index'

export const parseOptions = (options: unknown): SnipOptions => {
  if (typeof options !== 'object' || options === null) {
    return defaultOptions
  }

  const { method, lines, ellipsis, midWord } = options as Partial<SnipOptions>

  return {
    method: method !== undefined ? parseMethod(method) : defaultOptions.method,
    lines: lines !== undefined ? parseLines(lines) : defaultOptions.lines,
    ellipsis: ellipsis !== undefined ? parseEllipsis(ellipsis) : defaultOptions.ellipsis,
    midWord: midWord !== undefined ? parseMidWord(midWord) : defaultOptions.midWord,
  }
}
