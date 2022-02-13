import { Snip } from '../types'
import { addObserver } from '../observer'
import { getState, hasState, setState, getPublicState } from '../utils'
import { applySnipping } from '../methods'
import { parseOptions } from '../input'

// TODO: add the posibility to change of onStateChanged callback
export const snip: Snip = (element, options, onStateChanged) => {
  const isFirstSnip = !hasState(element)
  const elState = getState(element)

  setState(element, {
    ...elState,
    ...parseOptions(options),
    hasEllipsis: isFirstSnip ? false : elState?.hasEllipsis,
    fullText: isFirstSnip ? element.textContent : elState?.fullText,
  })

  const onElementResize = () => {
    const oldState = getPublicState(element)
    applySnipping(element)
    onStateChanged(getPublicState(element), oldState)
  }

  isFirstSnip && typeof ResizeObserver !== 'undefined' ? addObserver(element, onElementResize) : applySnipping(element)
}
