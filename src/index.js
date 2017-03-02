/* @flow */

import React from 'react'
import { Provider } from 'react-redux'

import Router from '@helpers/router'
import Root from '@app'
import store from '@store'

const Core = (): React$Element<any> => (
  <Provider store={store}>
    <Router initialEntries={['/launch']}>
      <Root />
    </Router>
  </Provider>
)

export default Core
