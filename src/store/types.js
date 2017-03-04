/* @flow */

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { App, Action as AppAction } from '@store/modules/app/types.js'
import type { Counter, Action as CounterAction } from '@store/modules/counter/types.js'
import type { Action as HistoryAction } from '@store/modules/history/types.js'

export type State = {
  app: App,
  counter: Counter,
  history: History,
}

export type Actions = AppAction | CounterAction | HistoryAction

export type Store = ReduxStore<State, Actions>
export type Dispatch = ReduxDispatch<Actions>
