import { SnipOptions } from './snip/interface'

export const defaultOptions: SnipOptions = {
  method: 'css',
  maxLines: 3,
  separators: ['. ', ', ', ' ', ''],
  ellipsis: '.\u200A.\u200A.'
}
