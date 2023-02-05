import { parseMode } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseMode', () => {
  it('returns js if CSS mode is unsupported', () => {
    cy.stub(CSS, 'supports', () => false)

    expect(parseMode('css')).to.equal('js')
    expect(parseMode('js')).to.equal('js')
  })

  it('returns value of valid snip mode', () => {
    expect(parseMode('css')).to.equal('css')
    expect(parseMode('js')).to.equal('js')
  })

  it('returns default value on invalid snip mode', () => {
    expect(parseMode(null)).to.equal(defaultOptions.mode)
    expect(parseMode(undefined)).to.equal(defaultOptions.mode)
    expect(parseMode({})).to.equal(defaultOptions.mode)
    expect(parseMode([])).to.equal(defaultOptions.mode)
    expect(parseMode('invalid')).to.equal(defaultOptions.mode)
  })
})
