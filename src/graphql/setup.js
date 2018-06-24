/* @flow */

import { AsyncStorage } from 'react-native'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloLink } from 'apollo-link'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'

import { getMainDefinition } from 'apollo-utilities'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { withClientState } from 'apollo-link-state'

import { API, SUBSCRIPTIONS_API } from '@config'
import { resolvers } from '@graphql/store'

let client: ?ApolloClient // eslint-disable-line

export const setupApollo = async (): Promise<boolean> => {
  const cache: Class<*> = new InMemoryCache()

  let userToken: ?string
  try {
    userToken = await AsyncStorage.getItem('@RNSKstore:token')
  } catch (error) {
    console.log('🔴 @RNSKstore:token', error)
  }
  const authLink: Class<*> = setContext(
    async (
      _,
      { headers }
    ): Promise<{
      headers: Object,
    }> => {
      let token: ?string
      try {
        token = await AsyncStorage.getItem('@RNSKstore:token')
      } catch (error) {
        console.log('🔴 @RNSKstore:token', error)
      }
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : null,
          'Content-Type': 'application/json',
        },
      }
    }
  )
  const httpLink: Class<*> = new HttpLink({ uri: API })
  const wsClient = new SubscriptionClient(SUBSCRIPTIONS_API, {
    reconnect: true,
    connectionParams: {
      Authorization: userToken ? `Bearer ${userToken}` : null,
    },
  })
  const webSocketLink = new WebSocketLink(wsClient)
  const requestLink = ({ queryOrMutationLink, subscriptionLink }) =>
    ApolloLink.split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      subscriptionLink,
      queryOrMutationLink
    )
  const stateLink: Class<*> = withClientState({ cache, ...resolvers })
  const errorLink = onError(({ graphQLErrors, response, networkError }) => {
    console.log('😱', response)
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Path: ${path}`,
          locations
        )
      )
    }
    if (networkError)
      console.log(`[Network error 📶]: ${networkError}`, networkError)
  })
  client = new ApolloClient({
    cache,
    link: ApolloLink.from([
      authLink,
      errorLink,
      stateLink,
      requestLink({
        queryOrMutationLink: httpLink,
        subscriptionLink: webSocketLink,
      }),
    ]),
  })
  client.onResetStore(() => {
    stateLink.writeDefaults()
    console.log('🌬 @RNSKstore restore to defaults')
  })
  return true
}
export { client }
