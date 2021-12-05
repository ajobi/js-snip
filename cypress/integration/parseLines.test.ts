import { parseLines } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseLines', () => {
  it('returns original integer values', () => {
    expect(parseLines(0)).to.equal(0)
    expect(parseLines(10)).to.equal(10)
    expect(parseLines(-7)).to.equal(-7)
  })

  it('returns non decimal part of decimal values', () => {
    expect(parseLines(0.22)).to.equal(0)
    expect(parseLines(7.8)).to.equal(7)
    expect(parseLines(-2.22)).to.equal(-2)
  })

  it('returns int parsed part of string values', () => {
    expect(parseLines('12')).to.equal(12)
    expect(parseLines('8.5')).to.equal(8)
    expect(parseLines('2text')).to.equal(2)
    expect(parseLines('3.7text')).to.equal(3)
  })

  it('returns default lines on non-parseable value', () => {
    expect(parseLines('text')).to.equal(defaultOptions.lines)
  })
})
