/* @flow */

export type Action = {
  type: string,
  payload?: {
    counter: number,
  },
}

export type Counter = number
