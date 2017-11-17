import { mq, rem, vh, vw } from '@helpers/responsive'

describe('Helper component: Responsive', () => {
  it('mq() operates correctly', () => {
    const breakpoints = { maxWidth: 42 }
    const styles = { width: 42 }
    expect(mq(breakpoints, styles)).toEqual({})
  })

  it('rem() operates correctly', () => {
    expect(rem(0)).toBe(0)
    expect(rem(0)).toBeFalsy()
    expect(rem(0)).not.toBeNull()
    expect(rem(0)).not.toBeUndefined()
    expect(rem(0)).not.toBeTruthy()
  })

  it('vh() operates correctly', () => {
    expect(vh(42)).not.toBe(0)
    expect(vh(42)).not.toBeNull()
    expect(vh(42)).not.toBeUndefined()
    expect(vh(42)).not.toBeFalsy()
    expect(vh(42)).toBeTruthy()
    expect(vh(0)).toBe(0)
    expect(vh(0)).toBeFalsy()
    expect(vh(0)).not.toBeNull()
    expect(vh(0)).not.toBeUndefined()
    expect(vh(0)).not.toBeTruthy()
  })

  it('vw() operates correctly', () => {
    expect(vw(42)).not.toBe(0)
    expect(vw(42)).not.toBeNull()
    expect(vw(42)).not.toBeUndefined()
    expect(vw(42)).not.toBeFalsy()
    expect(vw(42)).toBeTruthy()
    expect(vw(0)).toBe(0)
    expect(vw(0)).toBeFalsy()
    expect(vw(0)).not.toBeNull()
    expect(vw(0)).not.toBeUndefined()
    expect(vw(0)).not.toBeTruthy()
  })
})
