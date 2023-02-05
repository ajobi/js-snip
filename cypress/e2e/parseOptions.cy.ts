import { parseOptions } from '../../instrumented/input'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('parseOptions', () => {
  it('returns defaults for undefined values', () => {
    expect(parseOptions({})).to.deep.equal(defaultOptions)
    expect(parseOptions({ mode: 'js' })).to.deep.equal({
      ...defaultOptions,
      mode: 'js',
    })
    expect(parseOptions({ lines: 4 })).to.deep.equal({ ...defaultOptions, lines: 4 })
    expect(parseOptions({ midWord: false })).to.deep.equal({
      ...defaultOptions,
      midWord: false,
    })
    expect(parseOptions({ ellipsis: 'zzz' })).to.deep.equal({
      ...defaultOptions,
      ellipsis: 'zzz',
    })
    expect(parseOptions({ textContent: 'text' })).to.deep.equal({
      ...defaultOptions,
      textContent: 'text',
    })
    expect(parseOptions({ mode: 'js', lines: 4 })).to.deep.equal({
      ...defaultOptions,
      mode: 'js',
      lines: 4,
    })
  })

  it('applies parsing to values', () => {
    expect(parseOptions({})).to.deep.equal(defaultOptions)
    expect(parseOptions({ mode: 'unknown mode' })).to.deep.equal({
      ...defaultOptions,
    })
    expect(parseOptions({ lines: '4' })).to.deep.equal({ ...defaultOptions, lines: 4 })
    expect(parseOptions({ midWord: 'unknown midword' })).to.deep.equal({
      ...defaultOptions,
    })
    expect(parseOptions({ ellipsis: {} })).to.deep.equal({ ...defaultOptions })
    expect(parseOptions({ textContent: 123 })).to.deep.equal({ ...defaultOptions, textContent: '123' })
  })

  it('returns default options for non object value', () => {
    expect(parseOptions('test')).to.deep.equal(defaultOptions)
    expect(parseOptions(123)).to.deep.equal(defaultOptions)
    expect(parseOptions(null)).to.deep.equal(defaultOptions)
  })
})
