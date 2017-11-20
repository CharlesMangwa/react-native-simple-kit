# Touchable 👇

A generic component for handling touchable items with specific platforms behaviours on iOS & Android.

### API

* children?: `React$Element<any>`
* onLongPress?: `Function`
* onPress?: `Function`
* style?: `StyleSheet`

### Example

```js
/* @flow */
import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import Touchable from '@components/Touchable'

const MyComponent = (): React$Element<any> => (
  <Touchable
    onLongPress={(): void => Alert.alert('👋')}
    onPress={(): void => Alert.alert('🤝')}
    style={StyleSheet.flatten({ backgroundColor: 'pink' })}
  >
    <Text>Hello my dear!</Text>
  </Touchable>
)

export default MyComponent
```

## Changelog
#### Thursday, November 16th
- Initial release. We didn't track changes before this version.
