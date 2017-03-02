/* @flow */

import { Dimensions } from 'react-native'

type StyleSheet = {
  [key: string]: {
    [key: string]: string | number
  } | string | number
}
type Breakpoints = { [key: 'maxWidth' | 'minWidth']: number }
type Input = StyleSheet
type Output = StyleSheet

const { width } = Dimensions.get('window')

export const mq = (breakpoints: Breakpoints, input: Input): Output => {
  const { minWidth, maxWidth } = breakpoints
  const minWidthCondition = minWidth ? width > minWidth : true
  const maxWidthCondition = maxWidth ? width < maxWidth : true
  return minWidthCondition && maxWidthCondition
    ? input
    : {}
}
