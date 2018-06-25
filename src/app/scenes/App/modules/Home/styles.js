/* @flow */

import { Platform, StyleSheet } from 'react-native'
import { rem, vw, vh } from '@helpers/responsive'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'
import { AVENIR_BOLD, AVENIR_LIGHT_ITALIC, AVENIR_LIGHT } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 0,
  },
  flatList: {
    maxHeight: vh(50),
  },
  text: {
    ...AVENIR_LIGHT,
    fontSize: rem(18),
    backgroundColor: 'transparent',
    marginBottom: rem(15),
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw(100),
  },
  title: {
    ...AVENIR_BOLD,
    fontSize: rem(20),
    color: DEFAULT_TEXT_COLOR,
  },
  footer: {
    ...AVENIR_LIGHT_ITALIC,
    fontSize: rem(12),
    color: DEFAULT_TEXT_COLOR,
  },
})

export default styles
