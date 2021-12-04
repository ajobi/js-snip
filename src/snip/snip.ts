import { Snip } from '../types'
import { defaultOptions } from '../defaultOptions'
import { snipByCSS } from '../methods/snipByCSS'
import { snipByJS } from '../methods/snipByJS'

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
