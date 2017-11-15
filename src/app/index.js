/* @flow */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Navigation, Card } from 'react-router-navigation'

import App from '@scenes/App'
import Launch from '@scenes/Launch'

const Root = (): React$Element<any> => (
  <Switch>
    <Route
      exact path="/"
      render={(): React$Element<any> => <Redirect to="/launch" />}
    />
    <Route
      path="/"
      render={(): React$Element<any> => (
        <Navigation hideNavBar>
          <Card path="/launch" component={Launch} />
          <Card path="/app" component={App} />
        </Navigation>
      )}
    />
  </Switch>
)

export default Root
