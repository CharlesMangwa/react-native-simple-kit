/* @flow */

import React from 'react'
import { View } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { BottomNavigation, Tab } from 'react-router-navigation'

import Counter from './modules/Counter'
import Home from './modules/Home'
import Settings from './modules/Settings'
import TabBar from './components/TabBar'
import styles from './styles'

const App = (): React$Element<any> => (
  <View style={styles.container}>
    <Switch>
      <Route
        exact
        path="/app"
        render={(): React$Element<any> => <Redirect to="/app/home" />}
      />
      <Route
        path="/app"
        render={(): React$Element<any> => (
          <BottomNavigation
            renderTabBar={TabBar}
            lazy={false}
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
    {/* @TODO Implement a global modal system from here */}
  </View>
)

export default App
