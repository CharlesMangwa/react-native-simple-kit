/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

import type { State } from '@store/types'
import { increment, decrement, reset } from '@store/actions'

const mapStateToProps = (state: State): Object => ({
  counter: state.counter,
})

const mapActionsToProps: Object = { increment, decrement, reset }

export default (container: Class<any>): Class<any> =>
  compose(connect(mapStateToProps, mapActionsToProps))(container)
