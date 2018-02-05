/* @flow */

import { REHYDRATE } from 'redux-persist/constants'
import type { Action, History, HistoryState } from './types'

const CHANGE_HISTORY = 'CHANGE_HISTORY'
const INITIALYZE_HISTORY = 'INITIALYZE_HISTORY'

export const changeHistory = (history: History): Action => ({
  type: CHANGE_HISTORY,
  payload: { history },
})

export const initialyzeHistory = (history: History): Action => ({
  type: INITIALYZE_HISTORY,
  payload: { history },
})

const initialState: HistoryState = {
  location: null,
  index: 0,
  entries: [],
}

export default function (state: HistoryState = initialState, action: Action): HistoryState {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload && action.payload.history
      if (persistedState)
        return { ...state, ...persistedState }
      return { ...state }
    }
    case INITIALYZE_HISTORY:
    case CHANGE_HISTORY: {
      const { location, index, entries } = action.payload.history
      return {
        ...state,
        location,
        index,
        entries,
      }
    }
    default:
      return state
  }
}
