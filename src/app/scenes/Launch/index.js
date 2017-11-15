/* @flow */

import React, { Component } from 'react'
import { ActivityIndicator, ImageBackground } from 'react-native'
import { SUCCESS_COLOR } from '@theme/colors'

import type { App, History } from '@store/types'
import backgroundImage from '@assets/images/background.png'
import connect from './connect'
import styles from './styles'

type Props = {
  app: App,
  history: History,
}

class Launch extends Component<Props, void> {
  props: Props
  isRedirecting: boolean = false
  redirectDelay: number = 0

  componentDidMount = (): void => {
    this.initializeApp(this.props)
    setInterval((): void => {
      this.redirectDelay += 250
    }, 250)
  }

  componentWillReceiveProps = (nextProps: Props): void => {
    this.initializeApp(nextProps)
  }

  initializeApp = (nextProps: Props): void => {
    const { app, history } = nextProps
    if (app.isHydrated && !this.isRedirecting) {
      this.isRedirecting = true
      if (this.redirectDelay > 250) {
        history.replace('/app')
      }
      else {
        setTimeout((): void => {
          history.replace('/app')
        }, (250 - this.redirectDelay))
      }
    }
  }

  shouldComponentUpdate = (): boolean => false

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={backgroundImage}
      >
        <ActivityIndicator
          size="large"
          color={SUCCESS_COLOR}
        />
      </ImageBackground>
    )
  }
}

export default connect(Launch)
