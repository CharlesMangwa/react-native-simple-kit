/* @flow */

import React from 'react'
import { ImageBackground, Text } from 'react-native'

import Button from '@components/Button'
import background from '@assets/images/background.png'
import styles from './styles'

const Home = (): React$Element<any> => (
  <ImageBackground
    resizeMode="cover"
    style={styles.container}
    source={background}
  >
    <Text style={styles.text}>Home</Text>
    <Button
      inactive
      color="red"
      onPress={() => console.log('✈️ ➡️ ⚙️')}
      to="/app/settings"
      text="Go to settings"
    />
  </ImageBackground>
)

export default Home
