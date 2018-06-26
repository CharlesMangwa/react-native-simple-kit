import React from 'react'
import TestRenderer from 'react-test-renderer'
import { rgba } from '@helpers/colors'

describe('Helper function: rgba', () => {
  it('operates correctly', () => {
    expect(rgba('#FF9900')).not.toBe(0)
    expect(rgba('#FF9900')).not.toBeNull()
    expect(rgba('#FF9900')).not.toBeUndefined()
    expect(rgba('#FF9900')).not.toBeFalsy()
    expect(() => rgba('#FF9900')).not.toThrowError(
      "rgba() requires hex values (ie: '#FF3300')"
    )
    expect(rgba('#FF9900')).toBeTruthy()
    expect(rgba('#FF9900', 0.3)).toBe('rgba(255, 153, 0, 0.3)')
    expect(rgba('#FF9900')).toBe('rgba(255, 153, 0, 1)')
  })

  it('throws when the input is not an hex value', () => {
    expect(() => rgba(42)).toThrowError(
      "rgba() requires hex values (ie: '#FF3300')"
    )
  })
})
