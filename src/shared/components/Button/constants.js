/* @flow */

import {
  SUCCESS_COLOR,
  FAIL_COLOR,
  WARNING_COLOR,
  NEUTRAL_COLOR_00,
} from '@theme/colors'

export type DefaultProps = {
  color?: 'green' | 'red' | 'yellow' | 'white',
  children?: ?React$Element<any>,
  inactive?: ?boolean,
  onPress?: ?Function,
  replace?: ?boolean,
  routeState: ?Object,
  style?: ?StyleSheet,
  text?: ?string,
  to?: ?string,
}

export type ButtonProps = DefaultProps

export const brandColors = {
  green: SUCCESS_COLOR,
  red: FAIL_COLOR,
  yellow: WARNING_COLOR,
  white: NEUTRAL_COLOR_00,
}
