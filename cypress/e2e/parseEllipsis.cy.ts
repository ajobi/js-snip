import { parseEllipsis } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseEllipsis', () => {
  it('returns original string values', () => {
    expect(parseEllipsis('test')).to.equal('test')
  })

  it('returns parsed int values', () => {
    expect(parseEllipsis(123)).to.equal('123')
  })

  it('returns default ellipsis on non-parseable value', () => {
    expect(parseEllipsis(null)).to.equal(defaultOptions.ellipsis)
    expect(parseEllipsis(undefined)).to.equal(defaultOptions.ellipsis)
    expect(parseEllipsis({})).to.equal(defaultOptions.ellipsis)
    expect(parseEllipsis([])).to.equal(defaultOptions.ellipsis)
  })
})
