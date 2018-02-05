/* @flow */

import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router'
import { Navigation, Card } from 'react-router-navigation'

import App from '@scenes/App'
import Launch from '@scenes/Launch'

import type { History, Location } from '@store/types'
import { initialyzeHistory, changeHistory } from '@store/actions'
import connect from './connect'

type Props = {
  dispatch: Function,
  history: History,
  persistedLocation: Location,
}

const Root = (props: Props): React$Element<any> => {
  const { dispatch, history, persistedLocation } = props

  dispatch(initialyzeHistory(history))
  history.listen(() => dispatch(changeHistory(history)))

  if (persistedLocation)
    console.log(`The user left the app being on this route: ${persistedLocation.pathname}`)

  return (
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
}

export default withRouter(connect(Root))
