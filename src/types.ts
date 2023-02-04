export type SnippingMode = 'css' | 'js'

export interface SnipOptions {
  mode: SnippingMode
  lines: number
  ellipsis: string
  midWord: boolean
  textContent: string
}

export interface SnipState {
  hasEllipsis: boolean
}

export interface OnSnipped {
  (newState: Readonly<SnipState>, oldState: Readonly<SnipState>): void
}

export interface Snip {
  (element: HTMLElement, options?: Partial<Readonly<SnipOptions>>, onSnipped?: OnSnipped): void
}

export interface Unsnip {
  (element: HTMLElement): void
}
