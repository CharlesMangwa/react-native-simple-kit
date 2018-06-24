/* @flow */

import type { Action, User } from './types'

const DELETE_USER = 'DELETE_USER'
const SAVE_USER = 'SAVE_USER'
const REHYDRATE = 'persist/REHYDRATE'

const initialState: User = {}

export default function(state: User = initialState, action: Action): User {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload && action.payload.user
      if (persistedState) return persistedState
      return state
    }
    case DELETE_USER:
      return initialState
    case SAVE_USER:
      return {
        ...state,
        ...action.newUser,
      }
    default:
      return state
  }
}

export const deleteCurrentUser = (): Action => ({
  type: DELETE_USER,
})

export const saveCurrentUser = (newUser: User): Action => ({
  type: SAVE_USER,
  newUser,
})
