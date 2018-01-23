# Button 🔘

A generic button component that handles simple functions or navigation paths into React Router v4 based apps.

### API

* color?: `'blue' | 'green' | 'red' | 'yellow' | 'white'`
* children?: `React$Element<any>`
* inactive?: `boolean`
* onLongPress?: `Function`
* onPress: `Function`
* style?: `StyleSheet`
* text?: `string`

### Example

```js
import React from 'react'
import { SafeAreaView } from 'react-native'
import Button from '@components/Button'

const MyComponent = (): React$Element<any> => (
  <SafeAreaView style={{ flex: 1 }}>
    <Button
      color="red"
      onPress={() => props.navigator.popToRoot({
        animated: true,
        animationType: 'fade'
      })}
      text="Go back"
    />
  </SafeAreaView>
)

export default MyComponent
```

## Changelog
#### Tuesday, January 23rd, 2018
- Matching API with new routing lib.
#### Wednesday, November 22th, 2017
- Switch to `React.PureComponent`.

#### Monday, November 20th, 2017
- Add `blue` as a supported color.

#### Thursday, November 16th, 2017
- Initial release. We didn't track changes before this version.
