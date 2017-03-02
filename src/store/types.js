/* @flow */

import type { App } from '@store/modules/app/types.js'
import type { Counter } from '@store/modules/counter/types.js'

export type Store = {
  app: App,
  counter: Counter,
  history: History,
}
