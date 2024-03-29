import { Snip } from '../types'
import { addObserver, destroyObserver } from '../observer'
import { getState, hasState, setState, getPublicState, getLines } from '../utils'
import { snipByCSS, snipByJS } from '../modes'
import { parseOptions } from '../input'
import { unsnipElement } from './unsnip'

// TODO: add the tests for the posibility to change the onSnipped callback
export const snip: Snip = (element, options, onSnipped) => {
  const isFirstSnip = !hasState(element)
  const state = getState(element)
  const parsedOptions = parseOptions(options)

  setState(element, {
    ...state,
    ...parsedOptions,
    hasEllipsis: isFirstSnip ? false : state?.hasEllipsis,
    fullText: parsedOptions.textContent
      ? parsedOptions.textContent
      : isFirstSnip
      ? element.textContent
      : state?.fullText,
  })

  const applySnipping = (): void => {
    const oldState = getPublicState(element)
    const state = getState(element)

    unsnipElement(element)
    const linesBefore = getLines(element)

    if (state.mode === 'css') {
      snipByCSS(element, state)
    }

    if (state.mode === 'js') {
      snipByJS(element, state)
    }

    setState(element, {
      ...state,
      hasEllipsis: getLines(element) < linesBefore,
    })

    // TODO: add a test for undefined on snipped
    if (onSnipped) {
      const newState = getPublicState(element)
      onSnipped(newState, oldState)
    }
  }

  if (typeof ResizeObserver !== 'undefined') {
    destroyObserver(element)
    addObserver(element, applySnipping)
    return
  }

  applySnipping()
}
