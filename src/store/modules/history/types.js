/* @flow */

export type Match = any

export type Location = {
  pathname: string,
  key: string,
  search: string,
  hash: string,
  state?: Object,
}

export type Entries = Array<Location>

export type LocationShape = {
  pathname?: string,
  search?: string,
  hash?: string,
  state?: any,
}

export type HistoryAction = 'PUSH' | 'REPLACE' | 'POP'

export type History = {
  length: number,
  location: Location,
  action: HistoryAction,
  listen(callback: (location: Location, action: HistoryAction) => void): () => void,
  push(path: string | LocationShape, state?: any): void,
  replace(path: string | LocationShape, state?: any): void,
  go(n: number): void,
  goBack(): void,
  goForward(): void,
  canGo?: (n: number) => boolean,
  block(callback: (location: Location, action: HistoryAction) => boolean): void,
  // createMemoryHistory
  index?: number,
  entries?: Array<Location>,
}

export type HistoryState = {
  location: ?Location,
  index: number,
  entries: Entries,
}

export type Action = {
  type: 'CHANGE_HISTORY' | 'INITIALYZE_HISTORY',
  payload: { history: History },
}
