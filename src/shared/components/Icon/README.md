# Icon 💠

A generic component for SVG icons.

### API
* name: `'backButton'`
* actived?: `boolean`
* size?: `number`
* defaultActivedColor?: `string`
* defaultColor?: `string`
* style?: `Stylesheet | number`

### Example
```js
import React from 'react'
import Icon from '@components/Icon'

const MyComponent = (): React$Element<any> => (
  <Icon
    name="google"
    defaultColor="red"
    size={22}
  />
)

export default MyComponent
```

## Changelog
#### Wednesday, November 15th
- Initial release. We didn't track changes before this version.
