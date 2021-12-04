import { parseMethod } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseMethod', () => {
  it('returns js if CSS method is unsupported', () => {
    cy.stub(CSS, 'supports', () => false)

    expect(parseMethod('css')).to.equal('js')
    expect(parseMethod('js')).to.equal('js')
  })

  it('returns value of valid snip method', () => {
    expect(parseMethod('css')).to.equal('css')
    expect(parseMethod('js')).to.equal('js')
  })

  it('returns default value on invalid snip method', () => {
    expect(parseMethod('invalid')).to.equal(defaultOptions.method)
    expect(parseMethod('invalid')).to.equal(defaultOptions.method)
  })
})
