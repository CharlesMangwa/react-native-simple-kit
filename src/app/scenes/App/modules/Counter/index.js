/* @flow */

import React from 'react'
import { Image, Text } from 'react-native'
import styles from './styles'

const Counter = (): React$Element<any> => (
  <Image
    resizeMode="cover"
    style={styles.container}
    source={require('../../../../../shared/assets/images/background.png')}
  >
    <Text style={styles.text}>Counter</Text>
  </Image>
)

export default Counter
