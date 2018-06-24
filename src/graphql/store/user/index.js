/**
 * This is not used in the app right now.
 * It's just there so that you can have
 * an example if you want to switch from
 * Redux to Apollo Link State.
 */

const appStatus = {
  defaults: {
    currentUser: {
      __typename: 'CurrentUser',
    },
  },
  resolvers: {
    Mutation: {
      updateCurrentUser: (_, { currentUser }, { cache }) => {
        const data = {
          currentUser: {
            __typename: 'CurrentUser',
            ...currentUser,
          },
        }
        cache.writeData({ data })
        return { currentUser: data.currentUser }
      },
    },
  },
}

export default appStatus
