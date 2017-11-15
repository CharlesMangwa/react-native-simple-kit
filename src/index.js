/* @flow */

import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createMemoryHistory'

import type { History } from '@store/types'
import Root from '@app'
import store from '@store'

export const history: History = createHistory()

const Core = (): React$Element<any> => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>
)

export default Core
