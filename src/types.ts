export type SnipMethod = 'css' | 'js'

export interface SnipOptions {
  method?: SnipMethod
  maxLines?: number
  ellipsis?: string
  midWord?: boolean
}

export interface Snip {
  (element: HTMLElement, options: SnipOptions): void
}

export interface Unsnip {
  (element: HTMLElement): void
}

export interface ElementState extends SnipOptions {
  prevWidth?: number
  prevHeight?: number
  observer?: ResizeObserver
  fullText?: string
}

declare global {
  interface Window {
    __JsSnipState?: WeakMap<HTMLElement, ElementState>
  }
}
