/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

import type { State } from '@store/types'

const mapStateToProps = (state: State): Object => ({
  persistedLocation: state.history && state.history.location,
})

export default (container: Class<any>): Class<any> =>
  compose(connect(mapStateToProps))(container)
