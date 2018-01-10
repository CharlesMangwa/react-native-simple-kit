/* @flow */

import React, { Component } from 'react'
import { ActivityIndicator, ImageBackground } from 'react-native'
import Navigation from 'react-native-navigation'

import type { App } from '@store/types'
import { BRAND_COLOR_RED } from '@theme/colors'

import backgroundImage from '@assets/images/background.png'
import connect from './connect'
import styles from './styles'

type Props = {
  app: App,
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
    const { app } = nextProps
    if (app.isHydrated && !this.isRedirecting) {
      this.isRedirecting = true
      if (this.redirectDelay > 250) {
        this._redirectToApp()
      }
      else {
        setTimeout((): void => {
          this._redirectToApp()
        }, 250 - this.redirectDelay)
      }
    }
  }

  _redirectToApp = (): void => {
    Navigation.setRoot({
      bottomTabs: [
        {
          container: {
            name: 'app.home',
            navigationOptions: {
              bottomTab: {
                title: 'Home',
              },
            },
          },
        },
        {
          container: {
            name: 'app.counter',
            navigationOptions: {
              bottomTab: {
                title: 'Counter',
              },
            },
          },
        },
      ],
    })
  }

  shouldComponentUpdate = (): boolean => false

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={backgroundImage}
      >
        <ActivityIndicator size="large" color={BRAND_COLOR_RED} />
      </ImageBackground>
    )
  }
}

export default connect(Launch)
