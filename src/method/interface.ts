export interface SnipOptions  {
  fullText: string
  maxLines: number
  ellipsis?: string
  separators?: string[]
}

export interface SnipMethod {
  (element: HTMLElement, options: SnipOptions): void
}
