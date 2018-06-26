/* @flow */

import { connect } from 'react-redux'
import { updateAuthStatus, deleteCurrentUser } from '@redux/actions'

const mapDispatchToProps = dispatch => ({
  disconnectUser: () => {
    dispatch(updateAuthStatus())
    dispatch(deleteCurrentUser())
  },
})

export default (container: Function): Function =>
  connect(
    null,
    mapDispatchToProps
  )(container)
