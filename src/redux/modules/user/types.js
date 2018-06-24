/* @flow */

export type User =
  | {}
  | {
      avatarUrl: string,
      firstName: string,
      lastName: string,
    }

export type Action = {
  type: 'DELETE_USER' | 'SAVE_USER',
  newUser?: User,
  payload?: {
    user: User,
  },
}
