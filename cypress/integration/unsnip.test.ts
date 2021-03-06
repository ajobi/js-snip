import { getLines, unsnip } from '../../instrumented'
import { snipByCSS, snipByJS } from '../../instrumented/modes'
import { getMockState } from './snipByCSS.test'
import { getState, setState } from '../../instrumented/utils'

describe('unsnip', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Unsnips properly after JS snipping', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const originalText = paragraph.textContent

      setState(paragraph, getMockState(paragraph, { lines: 2, mode: 'js' }))
      snipByJS(paragraph, getState(paragraph))
      expect(paragraph.textContent).to.equal(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.'
      )

      unsnip(paragraph)
      expect(getLines(paragraph)).to.equal(7)
      expect(paragraph.textContent).to.equal(originalText)
      expect(paragraph.style.display).to.equal('')
      expect(paragraph.style.webkitLineClamp).to.equal('')
      expect(paragraph.style.webkitBoxOrient).to.equal('')
      expect(paragraph.style.overflow).to.equal('')
    })
  })

  it('Unsnips properly after CSS snipping', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const originalText = paragraph.textContent

      setState(paragraph, getMockState(paragraph, { lines: 2 }))
      snipByCSS(paragraph, getState(paragraph))
      expect(getLines(paragraph)).to.equal(2)

      unsnip(paragraph)
      expect(getLines(paragraph)).to.equal(7)
      expect(paragraph.textContent).to.equal(originalText)
      expect(paragraph.style.display).to.equal('')
      expect(paragraph.style.webkitLineClamp).to.equal('')
      expect(paragraph.style.webkitBoxOrient).to.equal('')
      expect(paragraph.style.overflow).to.equal('')
    })
  })

  it('Does not break unsnipped elements', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const originalText = paragraph.textContent

      unsnip(paragraph)
      expect(paragraph.textContent).to.equal(originalText)
    })
  })
})
