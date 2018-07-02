/* @flow */

import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'

import { Button, Device } from '@components'

import background from '@assets/images/background.png'
import styles from './styles'

const Home = () => (
  <ImageBackground
    resizeMode="cover"
    style={styles.container}
    source={background}
  >
    <Device.Consumer>{data => console.log(data)}</Device.Consumer>
    <Text style={styles.text}>Home</Text>
    <Button
      inactive
      color="red"
      onPress={() => console.log('✈️ ➡️ ⚙️')}
      style={StyleSheet.flatten({ marginBottom: 16 })}
      to="Settings"
      text="Go to settings"
    />
  </ImageBackground>
)

export default Home
