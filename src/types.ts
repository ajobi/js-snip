export type SnipMethod = 'css' | 'js'

export interface SnipOptions {
  method?: SnipMethod
  lines?: number
  ellipsis?: string
  midWord?: boolean
}

export interface Snip {
  (element: HTMLElement, options: SnipOptions): void
}

export interface Unsnip {
  (element: HTMLElement): void
}
