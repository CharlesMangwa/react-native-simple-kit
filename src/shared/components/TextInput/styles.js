/* @flow */

import { StyleSheet } from 'react-native'
import { rem } from '@helpers/responsive'
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR } from '@theme/colors'
import { AVENIR_REGULAR } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    ...AVENIR_REGULAR,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '93%',
    height: rem(40),
    fontSize: rem(14),
    color: DEFAULT_TEXT_COLOR,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    paddingLeft: rem(15),
  },
})

export default styles
