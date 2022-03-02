export const supportsCSSMode = (): boolean =>
  typeof CSS !== 'undefined' &&
  CSS.supports('display', '-webkit-box') &&
  CSS.supports('-webkit-line-clamp', '3') &&
  CSS.supports('-webkit-box-orient', 'vertical')
