/* @flow */

import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { BottomNavigation, Tab } from 'react-router-navigation'

import type { Location } from '@store/types'
import { BRAND_COLOR_RED } from '@theme/colors'
import { Counter, Home, Settings } from '@App/modules'

import styles from './styles'

type Props = {
  location: Location,
}

const App = (props: Props): React$Element<any> => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={BRAND_COLOR_RED} />
    <Switch location={props.location}>
      <Route
        exact path="/app"
        render={(): React$Element<any> => <Redirect to="/app/home" />}
      />
      <Route
        path="/app/(home)?"
        render={(): React$Element<any> => (
          <BottomNavigation
            tabBarStyle={{ backgroundColor: 'white' }}
            tabActiveTintColor={BRAND_COLOR_RED}
          >
            <Tab
              path="/app/home"
              component={Home}
              label="Home"
            />
            <Tab
              path="/app/counter"
              component={Counter}
              label="Counter"
            />
            <Tab
              path="/app/settings"
              component={Settings}
              label="Settings"
            />
          </BottomNavigation>
        )}
      />
    </Switch>
  </SafeAreaView>
)

export default App
