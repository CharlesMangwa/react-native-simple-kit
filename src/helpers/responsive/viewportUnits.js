/* @flow */

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const vw = (value: number): number => (value / 100) * width
export const vh = (value: number): number => (value / 100) * height
