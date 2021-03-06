const UA_LINE_HEIGHT = 1.2

export const getLines = (element: HTMLElement): number => {
  const computedStyle = window.getComputedStyle(element)
  const computedHeight = parseFloat(computedStyle.height)
  const computedLineHeight =
    computedStyle.lineHeight === 'normal'
      ? parseFloat(computedStyle.fontSize) * UA_LINE_HEIGHT
      : parseFloat(computedStyle.lineHeight)

  if (computedHeight === 0 && computedLineHeight === 0) {
    return 0
  }

  return Math.ceil(computedHeight / computedLineHeight)
}
