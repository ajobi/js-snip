import { Snip } from '../types'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState, getPublicState, getLines } from '../utils'
import { snipByCSS, snipByJS } from '../methods'
import { parseOptions } from '../input'
import { unsnipElement } from './unsnip'

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

  const applySnipping = (): void => {
    const oldState = getPublicState(element)
    const state = getState(element)

    unsnipElement(element)
    const linesBefore = getLines(element)

    if (state.method === 'css') {
      snipByCSS(element, state)
    }

    if (state.method === 'js') {
      snipByJS(element, state)
    }

    setState(element, {
      ...state,
      hasEllipsis: getLines(element) < linesBefore,
    })

    const newState = getPublicState(element)

    if (newState.hasEllipsis !== oldState.hasEllipsis) {
      onStateChanged(newState, oldState)
    }
  }

  if (typeof ResizeObserver !== 'undefined') {
    destroyObserver(element)
    addObserver(element, applySnipping)
    return
  }

  applySnipping()
}
