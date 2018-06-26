/* @flow */
/* eslint no-use-before-define: 0 */

import type { NavigationScreenProp } from 'react-navigation'
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

/** *************
 *    REDUX     *
 ************** */

import type {
  App as AppType,
  Action as AppAction,
} from '@redux/modules/app/types.js'
import type {
  User as UserType,
  Action as UserAction,
} from '@redux/modules/user/types.js'
import type {
  Action as CounterAction,
  Counter as CounterType,
} from '@redux/modules/counter/types.js'

export type State = {
  app: AppType,
  counter: CounterType,
  user: UserType,
}

export type ReduxAction = AppAction | CounterAction | UserAction
export type App = AppType
export type Counter = CounterType
export type User = UserType
export type Dispatch = ReduxDispatch<ReduxAction>
export type Store = ReduxStore<State, ReduxAction>

/** **************************
 *     REACT-NAVIGATION     *
 ************************* */

export type Navigation = NavigationScreenProp<*>
