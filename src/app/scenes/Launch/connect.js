/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import type { Store } from '@store/types.js'

const mapStateToProps = (state: Store): Object => ({
  app: state.app,
})

const mapActionsToProps = (): Object => ({ withRouter }: Object)

export default (container: ReactClass<any>): ReactClass<any> => compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
)(container: ReactClass<any>)
