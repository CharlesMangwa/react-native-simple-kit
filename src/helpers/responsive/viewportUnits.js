/* @flow */

import { Dimensions } from 'react-native'

type WindowSize ={
  width: number,
  height: number,
}

const { width, height }: WindowSize = Dimensions.get('window')

export const vw = (value: number): number => (value / 100) * width
export const vh = (value: number): number => (value / 100) * height
