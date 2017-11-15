/* @flow */

import React from 'react'
import { View } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { BottomNavigation, Tab } from 'react-router-navigation'

import type { Location } from '@store/types'
import Counter from './modules/Counter'
import Home from './modules/Home'
import Settings from './modules/Settings'
import styles from './styles'

type Props = {
  location: Location,
}

const App = (props: Props): React$Element<any> => (
  <View style={styles.container}>
    <Switch location={props.location}>
      <Route
        exact path="/app"
        render={(): React$Element<any> => <Redirect to="/app/home" />}
      />
      <Route
        path="/app/(home)?"
        render={(): React$Element<any> => (
          <BottomNavigation lazy={false}>
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
  </View>
)

export default App
