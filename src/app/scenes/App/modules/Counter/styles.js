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
    marginBottom: rem(15),
    backgroundColor: 'transparent',
  },
  modalContentainer: {
    alignSelf: 'center',
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
  },
})

export default styles
