import { Snip, SnipOptions } from '../types'
import { snipByCSS } from '../methods/snipByCSS'
import { snipByJS } from '../methods/snipByJS'

const defaultOptions: SnipOptions = {
  method: 'css',
  maxLines: 3,
  ellipsis: '.\u200A.\u200A.',
  midWord: true
}

export const snip: Snip = (element, options) => {
  const mergeOptions = {
    ...defaultOptions,
    ...options
  }

  if (mergeOptions.method === 'js') {
    snipByJS(element, mergeOptions)
  } else {
    snipByCSS(element, mergeOptions)
  }
}
