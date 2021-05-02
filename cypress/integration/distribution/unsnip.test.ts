import { getLines, snipByCSS, snipByJS, unsnip } from '../../../instrumented'

describe('snipByJS', () => {
  beforeEach(() => {
    cy.visit('./cypress/method.test.html')
  })

  it ('Unsnips properly after JS snipping', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const originalText = paragraph.innerText

      snipByJS(paragraph, { maxLines: 2 })
      expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')

      unsnip(paragraph)
      expect(getLines(paragraph)).to.equal(7)
      expect(paragraph.innerText).to.equal(originalText)
      expect(paragraph.dataset.fullText).to.equal(undefined)
      expect(paragraph.style.display).to.equal('')
      expect(paragraph.style.webkitLineClamp).to.equal('')
      expect(paragraph.style.webkitBoxOrient).to.equal('')
      expect(paragraph.style.overflow).to.equal('')
    })
  })

  it ('Unsnips properly after CSS snipping', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]
      const originalText = paragraph.innerText

      snipByCSS(paragraph, { maxLines: 2 })
      expect(getLines(paragraph)).to.equal(2)

      unsnip(paragraph)
      expect(getLines(paragraph)).to.equal(7)
      expect(paragraph.innerText).to.equal(originalText)
      expect(paragraph.dataset.fullText).to.equal(undefined)
      expect(paragraph.style.display).to.equal('')
      expect(paragraph.style.webkitLineClamp).to.equal('')
      expect(paragraph.style.webkitBoxOrient).to.equal('')
      expect(paragraph.style.overflow).to.equal('')
    })
  })
})
