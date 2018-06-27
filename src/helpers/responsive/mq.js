/* @flow */

import { Dimensions } from 'react-native'

type StyleSheet = {
  [key: string]:
    | {
        [key: string]: string | number,
      }
    | string
    | number,
}
type Breakpoints = {
  [key: 'maxHeight' | 'minHeight' | 'maxWidth' | 'minWidth']: number,
}
type Input = StyleSheet
type Output = StyleSheet

const { width, height } = Dimensions.get('window')

const mq = (breakpoints: Breakpoints, input: Input): Output => {
  const { minWidth, maxWidth, minHeight, maxHeight } = breakpoints
  const minWidthCondition = minWidth ? width > minWidth : true
  const maxWidthCondition = maxWidth ? width < maxWidth : true
  const minHeightCondition = minHeight ? height > minHeight : true
  const maxHeightCondition = maxHeight ? height < maxHeight : true
  return minWidthCondition &&
    maxWidthCondition &&
    minHeightCondition &&
    maxHeightCondition
    ? input
    : {}
}

export default mq
