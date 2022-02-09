import { isSnipped } from '../../instrumented/utils'

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
})
