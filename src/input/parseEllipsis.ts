import { defaultOptions } from '../defaultOptions'

export const parseEllipsis = (ellipsis: unknown): string => {
  ellipsis = ellipsis.toString()

  if (typeof ellipsis === 'string') {
    return ellipsis
  }

  return defaultOptions.ellipsis
}
