/* @flow */

import React from 'react'
import { Text, View } from 'react-native'

import Touchable from '@components/Touchable'
import styles from './styles'

const Menu = (): React$Element<any> => {
  const redirectTo = (destination: string): string => destination
  return (
    <View style={styles.container}>
      <Touchable
        onPress={() => redirectTo('app.home')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Touchable>
      <View style={styles.line} />
      <Touchable
        onPress={() => redirectTo('app.counter')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Counter</Text>
      </Touchable>
    </View>
  )
}

export default Menu
