import { Snip } from './interface'
import { snipByCSS } from '../methods/snipByCSS'
import { snipByJS } from '../methods/snipByJS'

export const snip: Snip = (element, options) => {
  if (options.method === 'css') {
    snipByCSS(element, options)
  } else {
    snipByJS(element, options)
  }
}
