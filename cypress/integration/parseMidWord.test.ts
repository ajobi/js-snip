import { parseMidWord } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseMidWord', () => {
  it('returns original boolean values', () => {
    expect(parseMidWord(true)).to.equal(true)
    expect(parseMidWord(false)).to.equal(false)
  })

  it('returns default midWord on non-boolean value', () => {
    expect(parseMidWord('text')).to.equal(defaultOptions.midWord)
    expect(parseMidWord(123)).to.equal(defaultOptions.midWord)
    expect(parseMidWord({})).to.equal(defaultOptions.midWord)
    expect(parseMidWord(null)).to.equal(defaultOptions.midWord)
    expect(parseMidWord(undefined)).to.equal(defaultOptions.midWord)
  })
})
