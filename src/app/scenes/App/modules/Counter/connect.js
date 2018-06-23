/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

import type { State } from '@types'
import { increment, decrement, reset } from '@redux/actions'

const mapStateToProps = (state: State): Object => ({
  counter: state.counter,
})

const mapDispatchToProps = { increment, decrement, reset }

export default (container: Class<*>): Class<*> =>
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(container)
