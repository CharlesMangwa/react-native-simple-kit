/* @flow */

import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'

import getIcon from '@helpers/icon'
import Button from '@components/Button'
import background from '@assets/images/background.png'
import styles from './styles'

const Settings = (): React$Element<any> => (
  <ImageBackground
    resizeMode="cover"
    style={styles.container}
    source={background}
  >
    <Text style={styles.text}>Settings</Text>
    <Button
      color="red"
      style={StyleSheet.flatten({ flexDirection: 'row-reverse' })}
      onPress={() => console.warn('Coming soon!')}
      text="  Go back home"
    >
      {getIcon('backButton', 15, false, 'white')}
    </Button>
  </ImageBackground>
)

export default Settings
