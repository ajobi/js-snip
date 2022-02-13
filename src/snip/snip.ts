import { Snip } from '../types'
import { addObserver } from '../observer'
import { getState, hasState, setState, getPublicState } from '../utils'
import { applySnipping } from '../methods'
import { parseOptions } from '../input'

export const snip: Snip = (element, options, onStateChanged) => {
  const isFirstSnip = !hasState(element)
  const elState = getState(element)

  setState(element, {
    ...elState,
    ...parseOptions(options),
    fullText: isFirstSnip ? element.textContent : elState?.fullText,
  })

  const onElementResize = () => {
    const oldState = getPublicState(element)
    applySnipping(element)
    onStateChanged(oldState, getPublicState(element))
  }

  isFirstSnip && typeof ResizeObserver !== 'undefined' ? addObserver(element, onElementResize) : applySnipping(element)
}
