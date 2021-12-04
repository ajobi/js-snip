export interface SnipOptions {
  method?: 'css' | 'js'
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
