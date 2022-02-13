export type SnippingMethod = 'css' | 'js'

export interface SnipOptions {
  method: SnippingMethod
  lines: number
  ellipsis: string
  midWord: boolean
}

export interface SnipState {
  hasEllipsis: boolean
}

export interface Snip {
  (
    element: HTMLElement,
    options: Partial<SnipOptions>,
    onStateChanged: (newState: SnipState, oldState: SnipState) => void
  ): void
}

export interface Unsnip {
  (element: HTMLElement): void
}
