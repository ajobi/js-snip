import { Snip } from './interface'
import { snipByCSS } from '../methods/snipByCSS'
import { snipByJS } from '../methods/snipByJS'

export const snip: Snip = (element, options) => {
  if (options.method === 'js') {
    snipByJS(element, options)
  } else {
    snipByCSS(element, options)
  }
}
