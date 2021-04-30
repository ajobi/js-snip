describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('./cypress/test.html')
  })

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
