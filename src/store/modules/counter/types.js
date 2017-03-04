/* @flow */

export type Action = {
  type: 'INCREMENT' | 'DECREMENT',
  payload?: {
    counter: number,
  },
}

export type Counter = number
