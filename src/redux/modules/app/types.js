/* @flow */

export type App = {
  isAuthentified: boolean,
  isHydrated: boolean,
}

export type Action = {
  type: 'UPDATE_AUTH_STATUS' | 'persist/REHYDRATE',
  payload?: { app: App },
}
