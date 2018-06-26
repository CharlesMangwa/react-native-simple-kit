/* @flow */

import { connect } from 'react-redux'
import { updateAuthStatus, saveCurrentUser } from '@redux/actions'

const mapDispatchToProps = dispatch => ({
  connectUser: user => {
    dispatch(updateAuthStatus())
    dispatch(saveCurrentUser(user))
  },
})

export default (container: Function): Function =>
  connect(
    null,
    mapDispatchToProps
  )(container)
