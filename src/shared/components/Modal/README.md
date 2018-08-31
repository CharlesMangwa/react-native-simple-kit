# Modal 🔲

A generic component for handling modal based on `react-native-modal`.

### API

#### Basic

- children?: `() => React$Element<*> | React$Element<*>`
- content?: `() => React$Element<*> | React$Element<*>`
- isVisible: `boolean`
- onClosePressed: `Function`
- style?: `StyleSheet`

#### Complete

The exhaustive API can be found on [`react-native-community/react-native-modal`](https://github.com/react-native-community/react-native-modal) repository.

### Example

```jsx
/* @flow */
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Infos from '@components/Infos'

const MyComponent = (props: Object): React$Element<*> => (
  <SafeAreaView>
    <Modal
      isVisible
      content={() => <Text>Hello!</Text>}
      onClosePressed={() => console.warn('Modal closed')}
    />
  </SafeAreaView>
)

export default MyComponent
```

## Changelog

#### Friday, August 17th, 2018

- Initial release. We didn't track changes before this version.
