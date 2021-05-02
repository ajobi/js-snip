export interface SnipOptions  {
  maxLines: number
  fullText?: string
  ellipsis?: string
  separators?: string[]
}

export interface SnipMethod {
  (element: HTMLElement, options: SnipOptions): void
}
