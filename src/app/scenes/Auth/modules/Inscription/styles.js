/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/responsive'
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR } from '@theme/colors'
import { AVENIR_REGULAR } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  title: {
    ...AVENIR_REGULAR,
    fontSize: rem(20),
    color: DEFAULT_TEXT_COLOR,
    marginBottom: rem(20),
  },
})

export default styles
