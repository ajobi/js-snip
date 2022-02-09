import { isSnipped } from '../../instrumented/utils'
import { snip } from '../../instrumented'

describe('isSnipped', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Returns false on unsnipped elements', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      expect(isSnipped(paragraph)).to.equal(false)
    })
  })

  it('Returns true on css snipped elements', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      snip(paragraph, { lines: 2, method: 'css' })

      expect(isSnipped(paragraph)).to.equal(true)
    })
  })

  it('Returns true on js snipped elements', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      snip(paragraph, { lines: 2, method: 'js' })

      expect(isSnipped(paragraph)).to.equal(true)
    })
  })
})
