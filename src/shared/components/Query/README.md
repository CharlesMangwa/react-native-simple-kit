# Query ️🔎

A generic component for sending queries to a GraphQL API.

### API

- children: `React$StatelessFunctionalComponent<ChildrenProps>`,
- component?: `React$ComponentType<ChildrenProps>`,
- error?: `({ error: ApolloError, refetch: ApolloRefetch }) => React$Element<*>`,
- loader?: `() => ?React$Element<*>`,
- query: `DocumentNode`,
- render?: `React$StatelessFunctionalComponent<ChildrenProps>`,
- variables: `?OperationVariables`,

### Example

```jsx
/* @flow */

import React from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'
import { HOME_SERVICES_QUERY } from '@graphql/queries'
import Query from '@components/Query'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView>
    <Query
      query={HOME_SERVICES_QUERY}
      variables={{ limit: 0 }}
      component={Text}
    />
    <Query
      query={HOME_SERVICES_QUERY}
      loader={() => <ActivityIndicator />}
      error={() => <Text>Something went wrong..…</Text>}
    >
      {data => <Text>{JSON.stringify(data, null, 2)}</Text>}
    </Query>
  </SafeAreaView>
)

export default MyComponent
```

## Changelog

#### Sunday, June 24th

- Initial release. We didn't track changes before this version.
