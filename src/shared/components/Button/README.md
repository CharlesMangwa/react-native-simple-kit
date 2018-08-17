# Button 🔘

A generic button component that handles simple functions or navigation paths into React Router v4 based apps.

### API

- color?: `'blue' | 'green' | 'red' | 'yellow' | 'white' | string`
- children?: `React$Element<*>`
- inactive?: `boolean`
- onPress?: `Function`
- params?: `Object`
- style?: `StyleSheet`
- text?: `string`
- to?: `string`

### Example

```js
import React from 'react'
import { SafeAreaView } from 'react-native'
import Button from '@components/Button'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView style={{ flex: 1 }}>
    <Button color="#FF9900" to="Settings" text="Connection" />
    <Button
      onPress={() => console.warn('Success! 👍')}
      to="Home"
      text="Welcome!"
    />
  </SafeAreaView>
)

export default MyComponent
```

## Changelog

#### Sunday, June 24th

- Remove useless props & add support for any color.

#### Saturday, June 23rd

- Refactoring for React 16.3+.

#### Wednesday, November 22th

- Switch to `React.PureComponent`.

#### Monday, November 20th

- Add `blue` as a supported color.

#### Thursday, November 16th

- Initial release. We didn't track changes before this version.
