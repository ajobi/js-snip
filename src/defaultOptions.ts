import { SnipOptions } from './types'

export const defaultOptions: Readonly<SnipOptions> = {
  method: 'css',
  lines: 3,
  ellipsis: '.\u200A.\u200A.',
  midWord: true,
}
