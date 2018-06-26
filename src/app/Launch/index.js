/* @flow */

import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'

import type { App, Navigation, User } from '@types'
import { BRAND_COLOR_RED } from '@theme/colors'
import connect from './connect'
import styles from './styles'

type Props = {
  app: App,
  currentUser: User,
  navigation: Navigation,
}

class Launch extends Component<Props> {
  static defaultProps = {}

  componentDidMount() {
    this.initializeApp(this.props)
  }

  componentDidUpdate() {
    this.initializeApp(this.props)
  }

  initializeApp = async ({ app, currentUser, navigation }: Props) => {
    if (app.isHydrated) {
      setTimeout(() => {
        navigation.navigate(
          !app.isAuthentified || currentUser === {} ? 'Auth' : 'App'
        )
      }, 125)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={BRAND_COLOR_RED} />
        <ActivityIndicator size="large" color="white" />
      </View>
    )
  }
}

export default connect(Launch)
