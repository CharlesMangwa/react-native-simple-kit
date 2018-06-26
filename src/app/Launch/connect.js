/* @flow */

import { connect } from 'react-redux'

import type { State } from '@types'

const mapStateToProps = (state: State): Object => ({
  app: state.app,
  currentUser: state.user,
})

export default (container: Class<*>): Class<*> =>
  connect(mapStateToProps)(container)
