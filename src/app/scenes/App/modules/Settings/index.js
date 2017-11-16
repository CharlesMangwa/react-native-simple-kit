/* @flow */

import React from 'react'
import { ImageBackground, Text } from 'react-native'

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
      to="/app"
      text="Go back home"
    />
  </ImageBackground>
)

export default Settings
