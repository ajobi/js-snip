import { Snip } from '../types'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState, getPublicState } from '../utils'
import { applySnipping } from '../methods'
import { parseOptions } from '../input'

// TODO: add the tests for the posibility to change the onStateChanged callback
export const snip: Snip = (element, options, onStateChanged) => {
  const isFirstSnip = !hasState(element)
  const elState = getState(element)

  setState(element, {
    ...elState,
    ...parseOptions(options),
    hasEllipsis: isFirstSnip ? false : elState?.hasEllipsis,
    fullText: isFirstSnip ? element.textContent : elState?.fullText,
  })

  const snip = () => {
    const oldState = getPublicState(element)
    applySnipping(element)
    onStateChanged(getPublicState(element), oldState)
  }

  if (typeof ResizeObserver !== 'undefined') {
    destroyObserver(element)
    addObserver(element, snip)
  }

  snip()
}
