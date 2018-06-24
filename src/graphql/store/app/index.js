import gql from 'graphql-tag'

/**
 * This is not used in the app right now.
 * It's just there so that you can have
 * an example if you want to switch from
 * Redux to Apollo Link State.
 */
const appStatus = {
  defaults: {
    appStatus: {
      __typename: 'AppStatus',
      isAuthenticated: false,
      lastTokenUse: -1,
      updatedAt: Date.now(),
    },
  },
  resolvers: {
    Mutation: {
      updateAuthentificationStatus: (_, { isAuthenticated }, { cache }) => {
        const query = gql`
          query GetAppStatus {
            appStatus @client {
              isAuthenticated
              lastTokenUse
              updatedAt
            }
          }
        `
        const previous = cache.readQuery({ query })
        const data = {
          appStatus: {
            ...previous.appStatus,
            isAuthenticated,
            updatedAt: Date.now(),
          },
        }
        cache.writeData({ data })
        return { ...data.appStatus }
      },
      updateLastTokenUse: (_, { lastTokenUse }, { cache }) => {
        const query = gql`
          query GetAppStatus {
            appStatus @client {
              isAuthenticated
              lastTokenUse
              updatedAt
            }
          }
        `
        const previous = cache.readQuery({ query })
        const data = {
          appStatus: {
            ...previous.appStatus,
            lastTokenUse,
            updatedAt: Date.now(),
          },
        }
        cache.writeData({ data })
        return { ...data.appStatus }
      },
    },
  },
}

export default appStatus
