# Icon 💠

A generic component for custom SVG icons.

### API

* name: `'backButton'`
* actived?: `boolean`
* size?: `number`
* defaultActivedColor?: `string`
* defaultColor?: `string`
* style?: `StyleSheet`

### Example

```js
import React from 'react'
import Icon from '@components/Icon'

const MyComponent = (): React$Element<any> => (
  <Icon
    name="backButton"
    defaultColor="red"
    size={22}
  />
)

export default MyComponent
```

## Changelog
#### Wednesday, November 15th
- Initial release. We didn't track changes before this version.
