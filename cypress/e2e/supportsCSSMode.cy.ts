import { supportsCSSMode } from '../../instrumented'

describe('supportsCSSMode', () => {
  const refCSS = window.CSS

  beforeEach(() => {
    window.CSS = refCSS
  })

  it('returns true in modern browsers', () => {
    expect(supportsCSSMode()).to.equal(true)
  })

  it('returns false if CSS API is unsupported', () => {
    window.CSS = undefined

    expect(supportsCSSMode()).to.equal(false)
  })

  it('returns false if CSS line clamp is unsupported', () => {
    cy.stub(window.CSS, 'supports', (property) => property !== '-webkit-line-clamp')

    expect(supportsCSSMode()).to.equal(false)
  })
})
