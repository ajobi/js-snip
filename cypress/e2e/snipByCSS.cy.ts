import { getLines } from '../../instrumented'
import { snipByCSS } from '../../instrumented/modes'
import { parseOptions } from '../../instrumented/input'
import { SnipOptions } from '../../instrumented/types'
import { ElementState } from '../../instrumented/utils/elementState'

export const getMockState = (paragraph: HTMLElement, options: Partial<SnipOptions>): ElementState => {
  const parsedOptions = parseOptions(options)

  return {
    hasEllipsis: false,
    ...parsedOptions,
    fullText: parsedOptions.textContent || paragraph.textContent,
  }
}

describe('snipByCSS', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Snips on negative max lines', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const oldLines = getLines(paragraph)

      snipByCSS(paragraph, getMockState(paragraph, { lines: -1 }))

      expect(getLines(paragraph)).to.equal(oldLines)
    })
  })

  it('Snips on zero max lines', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const oldLines = getLines(paragraph)

      snipByCSS(paragraph, getMockState(paragraph, { lines: 0 }))

      expect(getLines(paragraph)).to.equal(oldLines)
    })
  })

  it('Snips on 1 max lines', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      snipByCSS(paragraph, getMockState(paragraph, { lines: 1 }))

      expect(getLines(paragraph)).to.equal(1)
    })
  })

  it('Snips on 2 max lines', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      snipByCSS(paragraph, getMockState(paragraph, { lines: 2 }))

      expect(getLines(paragraph)).to.equal(2)
    })
  })

  it('Does not snip on 10 max lines', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const oldLines = getLines(paragraph)

      snipByCSS(paragraph, getMockState(paragraph, { lines: 10 }))

      expect(getLines(paragraph)).to.equal(oldLines)
    })
  })

  it('Maintains the original style attributes', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const originalColor = paragraph.style.color

      snipByCSS(paragraph, getMockState(paragraph, { lines: 2 }))

      expect(paragraph.style.color).to.equal(originalColor)
    })
  })

  it('Is able to work with nested elements', () => {
    // TODO: Implement the feature
  })
})
