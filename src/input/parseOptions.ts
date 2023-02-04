import { SnipOptions } from '../types'
import { defaultOptions } from '../defaultOptions'
import { parseMode } from './parseMode'
import { parseLines } from './parseLines'
import { parseEllipsis } from './parseEllipsis'
import { parseMidWord } from './parseMidWord'
import { parseTextContent } from './parseTextContent'

export const parseOptions = (options: unknown): SnipOptions => {
  if (typeof options !== 'object' || options === null) {
    return defaultOptions
  }

  const { mode, lines, ellipsis, midWord, textContent } = options as Partial<SnipOptions>

  return {
    mode: parseMode(mode),
    lines: parseLines(lines),
    ellipsis: parseEllipsis(ellipsis),
    midWord: parseMidWord(midWord),
    textContent: parseTextContent(textContent),
  }
}
