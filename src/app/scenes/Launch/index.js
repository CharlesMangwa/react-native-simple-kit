/* @flow */

import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'

import type { App, History } from '@types'
import { BRAND_COLOR_RED } from '@theme/colors'
import connect from './connect'
import styles from './styles'

type Props = {
  app: App,
  history: History,
}

class Launch extends Component<Props> {
  componentDidMount() {
    this.initializeApp(this.props)
  }

  componentDidUpdate() {
    this.initializeApp(this.props)
  }

  initializeApp = async ({ app, history }: Props) => {
    if (app.isHydrated) {
      setTimeout(() => {
        history.replace('/app')
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
