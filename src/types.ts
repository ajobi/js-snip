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
    options?: Partial<Readonly<SnipOptions>>,
    onStateChanged?: (newState: Readonly<SnipState>, oldState: Readonly<SnipState>) => void
  ): void
}

export interface Unsnip {
  (element: HTMLElement): void
}
