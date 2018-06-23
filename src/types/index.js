/* @flow */

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type {
  App as AppType,
  Action as AppAction,
} from '@redux/modules/app/types.js'
import type {
  Action as CounterAction,
  Counter as CounterType,
} from '@redux/modules/counter/types.js'
import type {
  Location as LocationType,
  History as HistoryType,
  HistoryState,
  Action as HistoryAction,
} from '@redux/modules/history/types.js'

export type State = {
  app: AppType,
  counter: CounterType,
  history: HistoryState,
}

export type ReduxAction = AppAction | HistoryAction | CounterAction
export type App = AppType
export type Counter = CounterType
export type Dispatch = ReduxDispatch<ReduxAction>
export type Location = LocationType
export type History = HistoryType
export type Store = ReduxStore<State, ReduxAction>
