/* @flow */

import React from 'react'
import { ImageBackground, Text } from 'react-native'

import background from '@assets/images/background.png'
import styles from './styles'

const Counter = (): React$Element<any> => (
  <ImageBackground
    resizeMode="cover"
    style={styles.container}
    source={background}
  >
    <Text style={styles.text}>Counter</Text>
  </ImageBackground>
)

export default Counter
