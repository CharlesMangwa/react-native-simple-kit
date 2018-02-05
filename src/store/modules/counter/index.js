/* @flow */

import { REHYDRATE } from 'redux-persist/constants'
import type { Action, Counter } from './types'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

export default function (state: Counter = 0, action: Action): Counter {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload && action.payload.counter
      if (persistedState) return persistedState
      return state
    }
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 1
    case RESET:
      return 0
    default:
      return state
  }
}

export const decrement = (): Action => ({
  type: DECREMENT,
})

export const increment = (): Action => ({
  type: INCREMENT,
})

export const reset = (): Action => ({
  type: RESET,
})
