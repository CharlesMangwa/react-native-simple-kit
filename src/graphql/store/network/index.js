/**
 * This is not used in the app right now.
 * It's just there so that you can have
 * an example if you want to switch from
 * Redux to Apollo Link State.
 */

const appStatus = {
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: true,
    },
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        }
        cache.writeData({ data })
        return { ...data.networkStatus }
      },
    },
  },
}

export default appStatus
