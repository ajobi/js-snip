import { addObserver, destroyObserver } from '../../instrumented/observer'
import { getState, setState } from '../../instrumented/utils'
import { getMockState } from './snipByCSS.test'

describe('addObserver', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Adds the observer to the element state', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      setState(paragraph, getMockState(paragraph, {}))
      expect(getState(paragraph).observer).eq(undefined)

      addObserver(paragraph)
      expect(getState(paragraph).observer).not.eq(undefined)

      destroyObserver(paragraph)
    })
  })

  // it('Snips the element on resize', () => {
  //   cy.get('[data-cy=paragraph]').then(($paragraph) => {
  //     const paragraph = $paragraph.get()[0]
  //
  //     setState(paragraph, getMockState(paragraph, {}))
  //     addObserver(paragraph)
  //
  //     // eslint-disable-next-line cypress/no-unnecessary-waiting
  //     cy.wait(20).then(() => {
  //       expect(snipText).to.have.callCount(1)
  //
  //       paragraph.style.width = '50%'
  //
  //       // eslint-disable-next-line cypress/no-unnecessary-waiting
  //       cy.wait(20).then(() => {
  //         expect(snipText).to.have.callCount(2)
  //
  //         destroyObserver(paragraph)
  //       })
  //     })
  //   })
  // })

  it('Does not snip if the element dimensions did not change', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      setState(paragraph, getMockState(paragraph, {}))

      const snipText = cy.stub()
      const state = getState(paragraph)
      state.prevWidth = paragraph.clientWidth
      state.prevHeight = paragraph.clientHeight
      addObserver(paragraph)

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(20).then(() => {
        expect(snipText).to.have.callCount(0)
        destroyObserver(paragraph)
      })
    })
  })
})
