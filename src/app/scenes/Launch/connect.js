/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import type { State } from '@types'

const mapStateToProps = (state: State): Object => ({
  app: state.app,
})

const mapActionsToProps = { withRouter }

export default (container: Class<*>): Class<*> =>
  compose(
    connect(
      mapStateToProps,
      mapActionsToProps
    )
  )(container)
