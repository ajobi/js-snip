import { snip, getLines } from '../../../instrumented'

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

  it('Is able to switch snipping methods', () => {
    // TODO: Add the test
  })
})
