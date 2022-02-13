import { Snip } from '../types'
import { addObserver } from '../observer'
import { getState, hasState, setState } from '../utils'
import { snipText } from '../methods'
import { parseOptions } from '../input'

export const snip: Snip = (element, options) => {
  const isFirstSnip = !hasState(element)
  const elState = getState(element)

  setState(element, {
    ...elState,
    ...parseOptions(options),
    fullText: isFirstSnip ? element.textContent : elState?.fullText,
  })

  isFirstSnip && typeof ResizeObserver !== 'undefined' ? addObserver(element) : snipText(element)
}
