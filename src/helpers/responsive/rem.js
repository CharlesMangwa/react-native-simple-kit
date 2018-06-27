/* @flow */
import { PixelRatio, Platform } from 'react-native'
import { vh, vw } from './viewportUnits'

const BASE_SCREEN_WIDTH = 423.5294196844927 // shoutout @remlopsum 🤜🤛
const DEFAULT_RESPONSIVE_FONT_SIZE = 15 + vw(0.125) + vh(0.05)
export const getResponsiveFontSize = (value: number): number =>
  DEFAULT_RESPONSIVE_FONT_SIZE * (value / 16)
const getConsistentFontSize = (value: number): number => {
  if (PixelRatio.getFontScale() === 1) return value
  const diff = 1 - PixelRatio.getFontScale()
  if (diff > 0) return value + value * diff
  return value / PixelRatio.getFontScale()
}
export const rem = (value: number): number => {
  const screenScaleFactor = BASE_SCREEN_WIDTH / vw(100)
  const scaledFontSize = getResponsiveFontSize(value) / screenScaleFactor
  return Platform.OS === 'android'
    ? getConsistentFontSize(scaledFontSize)
    : scaledFontSize
}
export default rem
