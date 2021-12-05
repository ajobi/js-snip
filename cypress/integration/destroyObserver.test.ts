import { addObserver, destroyObserver } from '../../instrumented/observer'
import { getState, setState } from '../../instrumented/utils'
import { getMockState } from './snipByCSS.test'

describe('addObserver', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Removes the observer from the element state', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      setState(paragraph, getMockState(paragraph, {}))

      addObserver(paragraph)
      destroyObserver(paragraph)

      expect(getState(paragraph).observer).eq(undefined)
      expect(getState(paragraph).observer).eq(undefined)
    })
  })
})
