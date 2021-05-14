export interface SnipOptions {
  method?: 'css' | 'js'
  maxLines?: number
  ellipsis?: string
  separators?: string[]
}

export interface Snip {
  (element: HTMLElement, options: SnipOptions): void
}

export interface Unsnip {
  (element: HTMLElement): void
}
