/* @flow */

import type { App, Action } from './types'

const REHYDRATE = 'persist/REHYDRATE'
const UPDATE_AUTH_STATUS = 'UPDATE_AUTH_STATUS'

const initialState: App = {
  isAuthentified: false,
  isHydrated: false,
}

export default function(state: App = initialState, action: Action): App {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload && action.payload.app
      if (persistedState)
        return { ...state, ...persistedState, isHydrated: true }
      return { ...state, isHydrated: true }
    }
    case UPDATE_AUTH_STATUS:
      return {
        ...state,
        isAuthentified: !state.isAuthentified,
      }
    default:
      return state
  }
}

export const updateAuthStatus = (): Action => ({
  type: UPDATE_AUTH_STATUS,
})
