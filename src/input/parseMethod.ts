import { defaultOptions } from '../defaultOptions'
import { supportsCSSMethod } from '../utils'
import { SnipMethod } from '../types'

export const parseMethod = (method: unknown): SnipMethod => {
  if (!supportsCSSMethod()) {
    return 'js'
  }

  if (method === 'css' || method === 'js') {
    return method
  }

  return defaultOptions.method
}
