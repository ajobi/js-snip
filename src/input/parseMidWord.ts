import { defaultOptions } from '../defaultOptions'

export const parseMidWord = (midWord: unknown): boolean => {
  midWord = !!midWord

  if (typeof midWord === 'boolean') {
    return midWord
  }

  return defaultOptions.midWord
}
