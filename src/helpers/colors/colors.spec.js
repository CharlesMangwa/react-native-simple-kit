import { rgba } from './index.js'

describe('🎨 Helper function: rgba()', () => {
  it('should operate correctly', () => {
    expect.assertions(8)
    expect(rgba('#E33258')).not.toBe(0)
    expect(rgba('#E33258')).not.toBeNull()
    expect(rgba('#E33258')).not.toBeUndefined()
    expect(rgba('#E33258')).not.toBeFalsy()
    expect(() => rgba('#E33258')).not.toThrowError(
      "rgba() requires hex values (ie: '#E33258')"
    )
    expect(rgba('#E33258')).toBeTruthy()
    expect(rgba('#E33258', 0.3)).toBe('rgba(227, 50, 88, 0.3)')
    expect(rgba('#E33258')).toBe('rgba(227, 50, 88, 1)')
  })
  it('shoudl throw when the input is not an hex value', () => {
    expect(() => rgba(42)).toThrowError(
      "rgba() requires hex values (ie: '#E33258')"
    )
  })
})
