import { defaultOptions } from '../defaultOptions'
import { supportsCSSMethod } from '../utils'
import { SnippingMethod } from '../types'

export const parseMethod = (method: unknown): SnippingMethod => {
  if (!supportsCSSMethod()) {
    return 'js'
  }

  if (method === 'css' || method === 'js') {
    return method
  }

  return defaultOptions.method
}
