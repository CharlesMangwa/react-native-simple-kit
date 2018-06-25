/* @flow */

import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'

import type { Navigation, ReduxAction } from '@types'
import { Button } from '@components'

import getIcon from '@helpers/icon'
import background from '@assets/images/background.png'

import connect from './connect'
import styles from './styles'

type Props = {
  disconnectUser: () => ReduxAction,
  navigation: Navigation,
}

const Settings = ({ disconnectUser, navigation }: Props): React$Element<*> => (
  <ImageBackground
    resizeMode="cover"
    style={styles.container}
    source={background}
  >
    <Text style={styles.text}>Settings</Text>
    <Button
      inactive
      color="red"
      style={StyleSheet.flatten({
        flexDirection: 'row-reverse',
        marginBottom: 15,
      })}
      to="Home"
      text="Go back home"
    >
      {getIcon('backButton', 15, false, 'white')}
    </Button>
    <Button
      color="red"
      onPress={() => {
        disconnectUser()
        navigation.navigate('Auth')
      }}
      text="Log out"
    />
  </ImageBackground>
)

export default connect(Settings)
