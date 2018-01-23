/* @flow */

import {
  BRAND_COLOR_BLUE,
  BRAND_COLOR_GREEN,
  BRAND_COLOR_RED,
  BRAND_COLOR_YELLOW,
  NEUTRAL_COLOR_00,
} from '@theme/colors'

export type DefaultProps = {
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'white',
  children?: ?React$Element<*>,
  inactive?: ?boolean,
  onLongPress?: Function,
  style?: ?StyleSheet,
  text?: ?string,
}

export type Props = DefaultProps & {
  onPress: Function,
}

export const brandColors = {
  blue: BRAND_COLOR_BLUE,
  green: BRAND_COLOR_GREEN,
  red: BRAND_COLOR_RED,
  yellow: BRAND_COLOR_YELLOW,
  white: NEUTRAL_COLOR_00,
}
