/* @flow */

import React from 'react'
import { Navigation, Card } from 'react-router-navigation'

import App from '@scenes/App'
import Launch from '@scenes/Launch'

const Root = (): React$Element<any> => (
  <Navigation>
    <Card
      path="/launch"
      component={Launch}
      hideNavBar
    />
    <Card
      path="/app"
      component={App}
      hideNavBar
    />
  </Navigation>
)

export default Root
