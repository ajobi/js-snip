import { snip, getLines, unsnip } from '../../../instrumented'

describe('snip', () => {
  beforeEach(() => {
    cy.visit('./cypress/method.test.html')
  })

  it('Does snip with CSS method', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      snip(paragraph, { maxLines: 2, method: 'css' })

      expect(getLines(paragraph)).to.equal(2)
    })
  })

  it('Does snip with JS method', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      snip(paragraph, { maxLines: 2, method: 'js' })

      expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')
    })
  })

  it('Does snip with CSS method for unknown method', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      snip(paragraph, { maxLines: 2, method: 'unknown method' })

      expect(getLines(paragraph)).to.equal(2)
    })
  })

  describe('Complex Scenarios', () => {
    it('Is able to increase / decrease max lines (CSS)', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snip(paragraph, { maxLines: 1, method: 'css' })
        expect(getLines(paragraph)).to.equal(1)

        snip(paragraph, { maxLines: 2, method: 'css' })
        expect(getLines(paragraph)).to.equal(2)

        snip(paragraph, { maxLines: 1, method: 'css' })
        expect(getLines(paragraph)).to.equal(1)
      })
    })

    it('Is able to change text (CSS)', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snip(paragraph, { maxLines: 2, method: 'css' })
        expect(getLines(paragraph)).to.equal(2)

        const newText = 'This is some custom text that is only useful for this test case. The text should now be visible on the page and properly clamped to exactly two lines. Not more, not less. This text is completely useless for the world.'
        paragraph.textContent = newText

        snip(paragraph, { maxLines: 2, method: 'css' })
        expect(getLines(paragraph)).to.equal(2)
        expect(paragraph.dataset.fullText).to.equal(newText)
      })
    })

    it('Is able to increase / decrease max lines (JS)', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snip(paragraph, { maxLines: 1, method: 'js' })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')

        snip(paragraph, { maxLines: 2, method: 'js' })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')

        snip(paragraph, { maxLines: 1, method: 'js' })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      })
    })

    it('Is able to change text (JS)', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snip(paragraph, { maxLines: 1, method: 'js' })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')

        const newText = 'This is some custom text that is only useful for this test case. The text should now be visible on the page and properly clamped to exactly two lines. Not more, not less. This text is completely useless for the world.'
        // TODO: think about not having to use manual unsnip in the future
        unsnip(paragraph)
        paragraph.textContent = newText

        snip(paragraph, { maxLines: 1, method: 'js' })
        expect(paragraph.textContent).to.equal('This is some custom text that is only useful for this test case. The text should now be visibl.\u200A.\u200A.')
        expect(paragraph.dataset.fullText).to.equal(newText)
      })
    })

    it('Is able to switch snipping methods', () => {
      // TODO: Add the test
    })
  })
})
