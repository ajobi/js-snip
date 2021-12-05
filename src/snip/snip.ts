import { Snip } from '../types'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState } from '../utils'
import { snipText } from '../methods'
import { parseOptions } from '../input'

export const snip: Snip = (element, options) => {
  const isFirstSnip = !hasState(element)
  let elState = getState(element)

  const prevLines = elState?.lines
  const prevMethod = elState?.method
  const prevFullText = elState?.fullText

  elState = {
    ...elState,
    ...parseOptions(options),
    fullText: isFirstSnip ? element.textContent : prevFullText,
  }

  setState(element, elState)

  const needsObserver = elState.method === 'js' && typeof ResizeObserver !== 'undefined'
  const needsSnipping = prevLines !== elState.lines || (prevMethod !== elState.method && elState.method === 'css')

  if (isFirstSnip) {
    needsObserver ? addObserver(element) : snipText(element)
  } else {
    needsObserver ? addObserver(element) : destroyObserver(element)
    needsSnipping && snipText(element)
  }
}
