/* @flow */

import { StyleSheet } from 'react-native'
import { vw, vh } from '@helpers/responsive'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    flex: 1,
    width: vw(100),
    height: vh(100),
    padding: 0,
    margin: 0,
  },
})

export default styles
