import { snipByJS } from '../../../instrumented/methods/snipByJS'
// import { snipByCSS } from '../../../instrumented/methods/snipByCSS'
// import { getLines } from '../../../instrumented'

describe('snipByJS', () => {
  beforeEach(() => {
    cy.visit('./cypress/method.test.html')
  })

  describe('Simple Scenarios', () => {
    it('Snips on negative max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: -1 })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam veniam, voluptates? Distinctio ex hic maiores obcaecati quibusdam quod repudiandae temporibus. Amet consequatur iste nisi quos! Alias atque beatae consectetur dolor doloremque earum eos expedita fugiat pariatur possimus provident quod quos, repudiandae similique sit unde ut veritatis voluptates voluptatibus voluptatum? Assumenda culpa cum eligendi, eos itaque mollitia nostrum possimus praesentium quod rerum totam.')
      })
    })

    it('Snips on zero max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 0 })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam veniam, voluptates? Distinctio ex hic maiores obcaecati quibusdam quod repudiandae temporibus. Amet consequatur iste nisi quos! Alias atque beatae consectetur dolor doloremque earum eos expedita fugiat pariatur possimus provident quod quos, repudiandae similique sit unde ut veritatis voluptates voluptatibus voluptatum? Assumenda culpa cum eligendi, eos itaque mollitia nostrum possimus praesentium quod rerum totam.')
      })
    })

    it('Snips on 1 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 1 })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      })
    })

    it('Snips on 2 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 2 })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')
      })
    })

    it('Does not snip on 10 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 10 })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam veniam, voluptates? Distinctio ex hic maiores obcaecati quibusdam quod repudiandae temporibus. Amet consequatur iste nisi quos! Alias atque beatae consectetur dolor doloremque earum eos expedita fugiat pariatur possimus provident quod quos, repudiandae similique sit unde ut veritatis voluptates voluptatibus voluptatum? Assumenda culpa cum eligendi, eos itaque mollitia nostrum possimus praesentium quod rerum totam.')
      })
    })

    it('Maintains the original style attributes', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        const originalColor = paragraph.style.color

        snipByJS(paragraph, { maxLines: 2 })

        expect(paragraph.style.color).to.equal(originalColor)
      })
    })

    it('Applies custom ellipsis properly', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 1, ellipsis: 'AAA' })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur eaAAA')
      })
    })

    it('Works with custom separators', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 1, separators: [''] })

        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      })
    })
  })

  describe('Complex Scenarios', () => {
    it('Is able to increase / decrease max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snipByJS(paragraph, { maxLines: 1 })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')

        snipByJS(paragraph, { maxLines: 2 })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')

        snipByJS(paragraph, { maxLines: 1 })
        expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      })
    })

    it('Is able to change text ', () => {
      // cy.get('[data-cy=paragraph]').then(($paragraph) => {
      // const paragraph = $paragraph.get()[0]
      //
      // snipByJS(paragraph, { maxLines: 1 })
      // expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      //
      // const newText = 'This is some custom text that is only useful for this test case. The text should now be visible on the page and properly clamped to exactly two lines. Not more, not less. This text is completely useless for the world.'
      // paragraph.innerText = newText
      //
      // snipByJS(paragraph, { maxLines: 1 })
      // expect(paragraph.innerText).to.equal('This is some custom text that is only useful for this test case. The text should now be visible on the page and properly.\u200A.\u200A.')
      // expect(paragraph.dataset.fullText).to.equal(newText)
      // })
    })

    it('Is able to work with nested elements', () => {
      // TODO: Add the test
    })
  })
})
