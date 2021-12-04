import { parseMaxLines } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseMaxLines', () => {
  it('returns original integer values', () => {
    expect(parseMaxLines(0)).to.equal(0)
    expect(parseMaxLines(10)).to.equal(10)
    expect(parseMaxLines(-7)).to.equal(-7)
  })

  it('returns non decimal part of decimal values', () => {
    expect(parseMaxLines(0.22)).to.equal(0)
    expect(parseMaxLines(7.8)).to.equal(7)
    expect(parseMaxLines(-2.22)).to.equal(-2)
  })

  it('returns int parsed part of string values', () => {
    expect(parseMaxLines('12')).to.equal(12)
    expect(parseMaxLines('8.5')).to.equal(8)
    expect(parseMaxLines('2text')).to.equal(2)
    expect(parseMaxLines('3.7text')).to.equal(3)
  })

  it('returns default maxLines on non-parseable value', () => {
    expect(parseMaxLines('text')).to.equal(defaultOptions.maxLines)
  })
})
