# RGBA 🎨

A helper function to convert hex values into rgba colors.

### API

- value: `'string'`
- opacity: `number`

### Example

```jsx
import React from 'react'
import { SafeAreaView } from 'react-native'
import getIcon from '@helpers/icon'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: rgba('FF9900', 0.75),
    }}
  />
)

export default MyComponent
```

## Changelog

#### Friday, August 17th, 2018

- Initial release. We didn't track changes before this version.
