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

// TODO: implement runtime validation
export interface Validate {
  (options: unknown): boolean
}
