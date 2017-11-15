/* @flow */

import { Component } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import type { State } from '@store/types'

const mapStateToProps = (state: State): Object => ({
  app: state.app,
})

const mapActionsToProps = (): Object => ({ withRouter }: Object)

export default (container: Component<any, any>) =>
  compose(connect(mapStateToProps, mapActionsToProps))(container)
