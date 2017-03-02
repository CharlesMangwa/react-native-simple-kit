/* @flow */

import { REHYDRATE } from 'redux-persist/constants'
import type { App, Action } from './types'

const initialState: App = {
  isLoading: false,
  isHydrated: false,
}

export default function (state: App = initialState, action: Action): App {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        isHydrated: true,
      }
    default:
      return state
  }
}
