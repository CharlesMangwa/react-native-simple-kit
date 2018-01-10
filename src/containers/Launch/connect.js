/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

import type { State } from '@store/types'

const mapStateToProps = (state: State): Object => ({
  app: state.app,
})

export default (container: Class<any>): Class<any> =>
  compose(connect(mapStateToProps))(container)
