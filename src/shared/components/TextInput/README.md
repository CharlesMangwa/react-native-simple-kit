# TextInput ✍️

A generic component for handling user text inputs.

### API

- autoFocus?: `boolean`,
- defaultValue?: `string`,
- keyboardType?: `string`,
- multiline?: `boolean`,
- onBlur?: `Function`,
- onChangeText?: `Function`,
- onFocus?: `Function`,
- onSubmitEditing?: `Function`,
- placeholder: `string`,
- placeholderTextColor: `string`,
- returnKeyType?: `string`,
- search?: `boolean`,
- secured?: `boolean`,
- style?: `StyleSheet`,
- value?: `any`,

### Example

```js
/* @flow */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextInput from '@components/TextInput'

const MyComponent = (): React$Element<*> => (
  <View>
    /* Option A */
    <TextInput
      keyboardType="numeric"
      placeholder="Number"
      style={StyleSheet.flatten({ borderWidth: 1, borderColor: 'white' })
    />
    /* Option B */
    <TextInput secured placeholder="Password" />
  </View>
)

export default MyComponent
```

## Changelog

#### Friday, August 17th, 2018

- Initial release. We didn't track changes before this version.
