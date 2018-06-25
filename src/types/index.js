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

/** *********************
 *     GRAPHQL API     *
 ******************** */

export type Episode = 'NEWHOPE' | 'EMPIRE' | 'JEDI'

export type Episodes = Array<Episode>

export type FriendsConnection = {
  totalCount: number,
  edges: FriendsEdges,
  friends: Characters,
  pageInfo: PageInfo,
}

export type FriendsEdge = {
  cursor: number,
  node: Character,
}

export type FriendsEdges = Array<FriendsEdge>

export type Character = {
  id: number,
  name: string,
  friends: Characters,
  friendsConnection: FriendsConnection,
  appearsIn: Episodes,
}

export type Characters = Array<Character>

export type Droid = Character & {
  primaryFunction: string,
}

export type Human = Character & {
  height: number,
  mass: number,
  starships: Starships,
}

export type Hero = Human

export type PageInfo = {
  startCursor: number,
  endCursor: number,
  hasNextPage: boolean,
}

export type Review = {
  stars: number,
  commentary: string,
}

export type ReviewInput = {
  stars: number,
  commentary: string,
}

export type Starship = {
  id: number,
  name: string,
  length: number,
}

export type Starships = Array<Starship>

export type SearchResult = Human | Droid | Starship
