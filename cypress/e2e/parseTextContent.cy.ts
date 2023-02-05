import { parseTextContent } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseTextContent', () => {
  it('returns original string values', () => {
    expect(parseTextContent('test')).to.equal('test')
  })

  it('returns parsed int values', () => {
    expect(parseTextContent(123)).to.equal('123')
  })

  it('returns default textContent on non-parseable value', () => {
    expect(parseTextContent(null)).to.equal(defaultOptions.textContent)
    expect(parseTextContent(undefined)).to.equal(defaultOptions.textContent)
    expect(parseTextContent({})).to.equal(defaultOptions.textContent)
    expect(parseTextContent([])).to.equal(defaultOptions.textContent)
  })
})
