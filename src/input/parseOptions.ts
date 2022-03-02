import { SnipOptions } from '../types'
import { defaultOptions } from '../defaultOptions'
import { parseMethod } from './parseMethod'
import { parseLines } from './parseLines'
import { parseEllipsis } from './parseEllipsis'
import { parseMidWord } from './parseMidWord'

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
