/* @flow */
import { vh, vw } from './viewportUnits'

const DEFAULT_RESPONSIVE_FONT_SIZE = 15 + vw(0.125) + vh(0.05)

export const rem = (value: number): number =>
  DEFAULT_RESPONSIVE_FONT_SIZE * (value / 16)
