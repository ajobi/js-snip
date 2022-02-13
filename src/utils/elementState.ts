import { SnipOptions, SnipState } from '../types'

export interface ElementState extends SnipOptions, SnipState {
  prevWidth?: number
  prevHeight?: number
  observer?: ResizeObserver
  fullText?: string
}

const elementMap: WeakMap<HTMLElement, ElementState> = new WeakMap()

export const getState = (element: HTMLElement): Readonly<ElementState> => {
  return elementMap.get(element)
}

export const setState = (element: HTMLElement, state: ElementState): void => {
  elementMap.set(element, state)
}

export const hasState = (element: HTMLElement): boolean => {
  return elementMap.has(element)
}

export const deleteState = (element: HTMLElement): void => {
  elementMap.delete(element)
}

export const getPublicState = (element: HTMLElement): SnipState => {
  const { hasEllipsis } = getState(element)

  return {
    hasEllipsis,
  }
}
