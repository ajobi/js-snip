import { Snip } from '../types'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState, getPublicState } from '../utils'
import { applySnipping } from '../methods'
import { parseOptions } from '../input'

// TODO: add the tests for the posibility to change the onStateChanged callback
export const snip: Snip = (element, options, onStateChanged) => {
  const isFirstSnip = !hasState(element)
  const state = getState(element)

  setState(element, {
    ...state,
    ...parseOptions(options),
    hasEllipsis: isFirstSnip ? false : state?.hasEllipsis,
    fullText: isFirstSnip ? element.textContent : state?.fullText,
  })

  const snip = () => {
    const oldState = getPublicState(element)
    applySnipping(element)
    onStateChanged(getPublicState(element), oldState)
  }

  if (typeof ResizeObserver !== 'undefined') {
    destroyObserver(element)
    addObserver(element, snip)
    return
  }

  snip()
}
