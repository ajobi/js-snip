import { snip, getLines, unsnip } from '../../instrumented'

describe('snip', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Does snip with CSS mode', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      snip(paragraph, { lines: 2, mode: 'css' }, () => {
        expect(getLines(paragraph)).to.equal(2)
        unsnip(paragraph)
      })
    })
  })

  it('Does snip with JS mode', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      snip(paragraph, { lines: 2, mode: 'js' }, () => {
        expect(paragraph.textContent).to.equal(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.'
        )
        unsnip(paragraph)
      })
    })
  })

  // it('Is able to increase / decrease max lines (JS)', () => {
  //   cy.get('[data-cy=paragraph]').then(($paragraph) => {
  //     const paragraph = $paragraph.get()[0]
  //
  //     snip(paragraph, { lines: 1, mode: 'js' }, () => {
  //       expect(paragraph.textContent).to.equal(
  //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.'
  //       )
  //       unsnip(paragraph)
  //     })

  // snip(paragraph, { lines: 2, mode: 'js' })
  // expect(paragraph.textContent).to.equal(
  //   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earum eius error expedita fuga illum iste iure minima nobis, odio praesentium quae quas ullam ve.\u200A.\u200A.'
  // )
  //
  // snip(paragraph, { lines: 1, mode: 'js' })
  // expect(paragraph.textContent).to.equal(
  //   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.'
  // )
  // })
  // })
  //
  //   it('Is able to change text (JS)', () => {
  //     cy.get('[data-cy=paragraph]').then(($paragraph) => {
  //       const paragraph = $paragraph.get()[0]
  //
  //       snip(paragraph, { lines: 1, mode: 'js' })
  //       expect(paragraph.textContent).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut, consectetur earu.\u200A.\u200A.')
  //
  //       const newText = 'This is some custom text that is only useful for this test case. The text should now be visible on the page and properly clamped to exactly two lines. Not more, not less. This text is completely useless for the world.'
  //       // TODO: think about not having to use manual unsnip in the future
  //       unsnip(paragraph)
  //       paragraph.textContent = newText
  //
  //       snip(paragraph, { lines: 1, mode: 'js' })
  //       expect(paragraph.textContent).to.equal('This is some custom text that is only useful for this test case. The text should now be visibl.\u200A.\u200A.')
  //       expect(paragraph.dataset.fullText).to.equal(newText)
  //     })
  //   })
  //
  //   it('Is able to switch snipping modes', () => {
  //     // TODO: Add the test
  //   })
})
