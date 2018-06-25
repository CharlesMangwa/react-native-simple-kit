/* @flow */

import React from 'react'
import { StyleSheet, View } from 'react-native'

import type { Navigation, ReduxAction, User } from '@types'
import { Button } from '@components'

import connect from '@Auth/connect'
import styles from './styles'

type Props = {
  navigation: Navigation,
  connectUser: User => ReduxAction,
}

const onConnection = ({ navigate }: Navigation, connectUser: Function) => {
  connectUser({
    avatarUrl:
      'https://cdn.dribbble.com/users/310943/screenshots/2665863/bring-your-friends.gif',
    firstName: 'John',
    lastName: 'Doe',
  })
  navigate('App')
}

const Connection = ({ navigation, connectUser }: Props): React$Element<*> => (
  <View style={styles.container}>
    <Button
      color="red"
      onPress={() => onConnection(navigation, connectUser)}
      style={StyleSheet.flatten({ marginBottom: 10 })}
      text="Connect me"
    />
    <Button inactive color="red" to="Inscription" text="Inscription" />
  </View>
)

export default connect(Connection)
