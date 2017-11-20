/* @flow */

export type Action = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET',
  payload?: {
    counter: number,
  },
}

export type Counter = number
