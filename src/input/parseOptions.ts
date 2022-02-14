import { SnipOptions } from '../types'
import { defaultOptions } from '../defaultOptions'
import { parseMethod, parseLines, parseEllipsis, parseMidWord } from './index'

export const parseOptions = (options: unknown): SnipOptions => {
  if (typeof options !== 'object' || options === null) {
    return defaultOptions
  }

  const { method, lines, ellipsis, midWord } = options as Partial<SnipOptions>

  return {
    method: parseMethod(method),
    lines: parseLines(lines),
    ellipsis: parseEllipsis(ellipsis),
    midWord: parseMidWord(midWord),
  }
}
