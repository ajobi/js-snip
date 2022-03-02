import { defaultOptions } from '../defaultOptions'
import { supportsCSSMode } from '../utils'
import { SnippingMode } from '../types'

export const parseMode = (mode: unknown): SnippingMode => {
  if (!supportsCSSMode()) {
    return 'js'
  }

  if (mode === 'css' || mode === 'js') {
    return mode
  }

  return defaultOptions.mode
}
