import { snipByJS } from '../../../instrumented'

describe('snipByJS', () => {
  beforeEach(() => {
    cy.visit('./cypress/method.test.html')
  })

  describe('Simple Scenarios', () => {
    it('Snips on negative max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: -1 })

        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam veniam, voluptates? Distinctio ex hic maiores obcaecati quibusdam quod repudiandae temporibus. Amet consequatur iste nisi quos! Alias atque beatae consectetur dolor doloremque earum eos expedita fugiat pariatur possimus provident quod quos, repudiandae similique sit unde ut veritatis voluptates voluptatibus voluptatum? Assumenda culpa cum eligendi, eos itaque mollitia nostrum possimus praesentium quod rerum totam.')
      })
    })

    it('Snips on zero max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 0 })

        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam veniam, voluptates? Distinctio ex hic maiores obcaecati quibusdam quod repudiandae temporibus. Amet consequatur iste nisi quos! Alias atque beatae consectetur dolor doloremque earum eos expedita fugiat pariatur possimus provident quod quos, repudiandae similique sit unde ut veritatis voluptates voluptatibus voluptatum? Assumenda culpa cum eligendi, eos itaque mollitia nostrum possimus praesentium quod rerum totam.')
      })
    })

    it('Snips on 1 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 1 })

        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      })
    })

    it('Snips on 2 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 2 })

        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')
      })
    })

    it('Does not snip on 10 max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]
        snipByJS(paragraph, { maxLines: 10 })

        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam veniam, voluptates? Distinctio ex hic maiores obcaecati quibusdam quod repudiandae temporibus. Amet consequatur iste nisi quos! Alias atque beatae consectetur dolor doloremque earum eos expedita fugiat pariatur possimus provident quod quos, repudiandae similique sit unde ut veritatis voluptates voluptatibus voluptatum? Assumenda culpa cum eligendi, eos itaque mollitia nostrum possimus praesentium quod rerum totam.')
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
  })

  describe('Complex Scenarios', () => {
    it('Is able to increase / decrease max lines', () => {
      cy.get('[data-cy=paragraph]').then(($paragraph) => {
        const paragraph = $paragraph.get()[0]

        snipByJS(paragraph, { maxLines: 1 })
        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')

        snipByJS(paragraph, { maxLines: 2 })
        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.')

        snipByJS(paragraph, { maxLines: 1 })
        expect(paragraph.innerText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
      })
    })
  })
})
