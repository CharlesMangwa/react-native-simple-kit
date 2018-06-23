/* @flow */

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { BottomNavigation, Tab } from 'react-router-navigation'

import type { Location } from '@types'
import { BRAND_COLOR_RED } from '@theme/colors'
import { Counter, Home, Settings } from '@App/modules'

import styles from './styles'

type Props = {
  location: Location,
}

class RedirectContent extends Component<*> {
  shouldComponentUpdate = () => false

  render = () => <Redirect to="/app/home" />
}

class AppContent extends Component<Props> {
  shouldComponentUpdate(nextProps) {
    const { location } = this.props
    if (location.pathname !== nextProps.location.pathname) return true
    return false
  }

  render() {
    return (
      <BottomNavigation
        tabBarStyle={{ backgroundColor: 'white' }}
        tabActiveTintColor={BRAND_COLOR_RED}
      >
        <Tab path="/app/home" component={Home} label="Home" />
        <Tab path="/app/counter" component={Counter} label="Counter" />
        <Tab path="/app/settings" component={Settings} label="Settings" />
      </BottomNavigation>
    )
  }
}

const App = ({ location }: Props): React$Element<*> => (
  // @FIXME: SafeAreaView be trippin' lately 😒…
  <View style={styles.container}>
    <StatusBar backgroundColor={BRAND_COLOR_RED} />
    <Switch location={location}>
      <Route exact path="/app" component={RedirectContent} />
      <Route path="/app/(home)?" component={AppContent} />
    </Switch>
  </View>
)
export default App
