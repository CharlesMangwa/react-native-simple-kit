/* @flow */
import React, { Component } from 'react'

import CounterModule from './Counter'
import HomeModule from './Home'
import SettingsModule from './Settings'

export class Counter extends Component<*> {
  shouldComponentUpdate = () => false

  render = () => <CounterModule {...this.props} />
}

export class Home extends Component<*> {
  shouldComponentUpdate = () => false

  render = () => <HomeModule {...this.props} />
}

export class Settings extends Component<*> {
  shouldComponentUpdate = () => false

  render = () => <SettingsModule {...this.props} />
}
