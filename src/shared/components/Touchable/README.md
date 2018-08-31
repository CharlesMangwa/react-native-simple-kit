# Touchable 👇

A generic component for handling touchable items with specific platforms behaviours on iOS & Android.

### API

- children?: `React$Element<*>`
- onLongPress?: `Function`
- onPress?: `Function`
- ripple?: `{ color: string, borderless: boolean }`
- style?: `StyleSheet`

### Example

```js
/* @flow */
import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import Touchable from '@components/Touchable'

const MyComponent = (): React$Element<*> => (
  <Touchable
    onLongPress={(): void => Alert.alert('👋')}
    onPress={(): void => Alert.alert('🤝')}
    ripple={{ color: #FF990080, borderless: true }}
    style={StyleSheet.flatten({ backgroundColor: 'pink' })}
  >
    <Text>Hello my dear!</Text>
  </Touchable>
)

export default MyComponent
```

## Changelog

#### Friday, August 17th, 2018

- Initial release. We didn't track changes before this version.
