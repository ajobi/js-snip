import { SnipOptions } from '../types'

interface ElementState extends SnipOptions {
  prevWidth?: number
  prevHeight?: number
  observer?: ResizeObserver
  fullText?: string
}

const elementMap: WeakMap<HTMLElement, ElementState> = new WeakMap()

export const getState = (element: HTMLElement): ElementState => {
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
