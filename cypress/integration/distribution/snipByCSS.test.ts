import { snipByCSS, getLines } from '../../../instrumented'

describe('snipByCSS', () => {
  beforeEach(() => {
    cy.visit('./cypress/method.test.html')
  })

  describe('Simple Scenarios', () => {
    it('Snips on negative max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        const oldLines = getLines(paragraph)

        snipByCSS(paragraph, { maxLines: -1 })

        expect(getLines(paragraph)).to.equal(oldLines)
      })
    })

    it('Snips on zero max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        const oldLines = getLines(paragraph)

        snipByCSS(paragraph, { maxLines: 0 })

        expect(getLines(paragraph)).to.equal(oldLines)
      })
    })

    it('Snips on 1 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByCSS(paragraph, { maxLines: 1 })

        expect(getLines(paragraph)).to.equal(1)
      })
    })

    it('Snips on 2 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByCSS(paragraph, { maxLines: 2 })

        expect(getLines(paragraph)).to.equal(2)
      })
    })

    it('Does not snip on 10 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        const oldLines = getLines(paragraph)

        snipByCSS(paragraph, { maxLines: 10 })

        expect(getLines(paragraph)).to.equal(oldLines)
      })
    })

    it('Maintains the original style attributes', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        const originalColor = paragraph.style.color

        snipByCSS(paragraph, { maxLines: 2 })

        expect(paragraph.style.color).to.equal(originalColor)
      })
    })
  })

  describe('Complex Scenarios', () => {
    it('Is able to increase / decrease max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snipByCSS(paragraph, { maxLines: 1 })
        expect(getLines(paragraph)).to.equal(1)

        snipByCSS(paragraph, { maxLines: 2 })
        expect(getLines(paragraph)).to.equal(2)

        snipByCSS(paragraph, { maxLines: 1 })
        expect(getLines(paragraph)).to.equal(1)
      })
    })

    it('Is able to change text ', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snipByCSS(paragraph, { maxLines: 2 })
        expect(getLines(paragraph)).to.equal(2)

        const newText = 'This is some custom text that is only useful for this test case. The text should now be visible on the page and properly clamped to exactly two lines. Not more, not less. This text is completely useless for the world.'
        paragraph.innerText = newText

        snipByCSS(paragraph, { maxLines: 2 })
        expect(getLines(paragraph)).to.equal(2)
        expect(paragraph.dataset.fullText).to.equal(newText)
      })
    })
  })
})
