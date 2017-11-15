/* @flow */

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { App as AppType, Action as AppAction } from '@store/modules/app/types.js'
import type { Action as CounterAction, Counter as CounterType  } from '@store/modules/counter/types.js'
import type { Location as LocationType, History as HistoryType, HistoryState, Action as HistoryAction } from '@store/modules/history/types.js'

export type State = {
  app: AppType,
  counter: CounterType,
  history: HistoryState,
}

export type Actions = AppAction | HistoryAction | CounterAction
export type App = AppType
export type Dispatch = ReduxDispatch<Actions>
export type Location = LocationType
export type History = HistoryType
export type Store = ReduxStore<State, Actions>
