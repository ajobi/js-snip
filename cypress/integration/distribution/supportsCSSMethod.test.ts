import { supportsCSSMethod } from '../../../instrumented'

describe('supportsCSSMethod', () => {
  const refCSS = window.CSS

  beforeEach(() => {
    window.CSS = refCSS
  })

  it('returns true in modern browsers', () => {
    expect(supportsCSSMethod()).to.equal(true)
  })

  it('returns false if CSS API is unsupported', () => {
    window.CSS = undefined

    expect(supportsCSSMethod()).to.equal(false)
  })

  it('returns false if CSS line clamp is unsupported', () => {
    cy.stub(window.CSS, 'supports', (property) => property !== '-webkit-line-clamp')

    expect(supportsCSSMethod()).to.equal(false)
  })
})
