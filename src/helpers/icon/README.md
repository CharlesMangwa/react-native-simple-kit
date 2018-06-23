# Icon 💠

A helper function to render SVGs without hassle.

### API

* name: `'backButton'`
* size: `number`
* actived?: `boolean`
* defaultColor?: `string`

### Example

```jsx
import React from 'react'
import { SafeAreaView } from 'react-native'
import getIcon from '@helpers/icon'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView style={{ flex: 1 }}>
    {getIcon('backButton', 15, false, 'white')}
  </SafeAreaView>
)

export default MyComponent
```

## Changelog
#### Wednesday, November 15th
- Initial release. We didn't track changes before this version.
