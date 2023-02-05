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

  it('Unsnips properly after JS snipping (custom textContent)', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const customTextContent =
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'

      setState(
        paragraph,
        getMockState(paragraph, {
          lines: 2,
          mode: 'js',
          textContent: customTextContent,
        })
      )
      snipByJS(paragraph, getState(paragraph))
      expect(paragraph.textContent).to.equal(
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architec.\u200A.\u200A.'
      )

      unsnip(paragraph)
      expect(getLines(paragraph)).to.equal(5)
      expect(paragraph.textContent).to.equal(customTextContent)
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
