/* @flow */

import React, { Component } from 'react'
import { ActivityIndicator, ImageBackground } from 'react-native'
import { BRAND_COLOR_50 } from '@theme/colors'

import type { App } from '@store/modules/app/types'
import connect from './connect'
import styles from './styles'

type Props = {
  app: App,
  replace: Function,
}

class Launch extends Component<void, Props, void> {
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
      } else {
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
        source={require('../../../shared/assets/images/background.png')}
      >
        <ActivityIndicator
          size="large"
          color={BRAND_COLOR_50}
        />
      </ImageBackground>
    )
  }
}

export default connect(Launch)
