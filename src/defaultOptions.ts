import { SnipOptions } from './snip/interface'

// TODO: Switch to a higher level "midWord" instead of separators option
export const defaultOptions: SnipOptions = {
  method: 'css',
  maxLines: 3,
  separators: ['. ', ', ', ' ', ''],
  ellipsis: '.\u200A.\u200A.'
}
