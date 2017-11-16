/* @flow */

import { StyleSheet } from 'react-native'
import { rem, vw } from '@helpers/responsive'
import { AVENIR_LIGHT } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...AVENIR_LIGHT,
    fontSize: rem(18),
    backgroundColor: 'transparent',
    marginBottom: rem(15),
  },
})

export default styles
