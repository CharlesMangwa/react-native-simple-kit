/* @flow */

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Navigation, Card } from 'react-router-navigation'

import AppScene from '@scenes/App'
import LaunchScene from '@scenes/Launch'

const Root = (): React$Element<*> => {
  class App extends Component<*> {
    shouldComponentUpdate(nextProps) {
      const { location } = this.props // eslint-disable-line
      if (location.pathname !== nextProps.location.pathname) return true
      return false
    }

    render = () => <AppScene {...this.props} />
  }

  class Launch extends Component<*> {
    shouldComponentUpdate = () => false

    render = () => <LaunchScene {...this.props} />
  }

  class RedirectContent extends Component<*> {
    shouldComponentUpdate = () => false

    render = () => <Redirect to="/launch" />
  }

  class RootContent extends Component<*> {
    shouldComponentUpdate = () => false

    render() {
      return (
        <Navigation hideNavBar>
          <Card path="/launch" component={Launch} />
          <Card path="/app" component={App} />
        </Navigation>
      )
    }
  }

  return (
    <Switch>
      <Route exact path="/" component={RedirectContent} />
      <Route path="/" component={RootContent} />
    </Switch>
  )
}

export default Root
