# Mutation ✂️

A generic component for sending mutations to a GraphQL API.

### API

* children: `React$StatelessFunctionalComponent<ChildrenProps>`,
* component?: `React$ComponentType<ChildrenProps>`,
* error?: `({ error: ApolloError }) => React$Element<*>`,
* loader?: `React$StatelessFunctionalComponent<*>`,
* mutation: `DocumentNode`,
* onCompleted: `(data: Object) => *`,
* onError: `(error: ApolloError) => *`,
* optimisticResponse: `Object`,
* render?: `React$StatelessFunctionalComponent<ChildrenProps>`,
* variables: `?OperationVariables`,

### Example

```jsx
/* @flow */

import React from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'
import { HSIGN_IN_MUTATION } from '@graphql/queries'
import MUTATION from '@components/MUTATION'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView>
    <Mutation
      mutation={SIGN_IN_MUTATION}
      variables={{ limit: 0 }}
      component={Text}
    />
    <Mutation
      mutation={SIGN_IN_MUTATION}
      loader={() => <ActivityIndicator/>}
      error={() => <Text>Something went wrong..…</Text>}
    >
      {data => 
        <Text>{JSON.stringify(data, null, 2)}</Text>}
    </Mutation>
  </SafeAreaView>
)

export default MyComponent
```

## Changelog
#### Sunday, June 24th
- Initial release. We didn't track changes before this version.
