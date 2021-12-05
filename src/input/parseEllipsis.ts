import { defaultOptions } from '../defaultOptions'

export const parseEllipsis = (ellipsis: unknown): string => {
  if (typeof ellipsis === 'string') {
    return ellipsis
  }

  if (typeof ellipsis === 'number') {
    return ellipsis.toString()
  }

  return defaultOptions.ellipsis
}
