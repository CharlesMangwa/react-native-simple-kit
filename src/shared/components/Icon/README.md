# Icon 💠

A generic component for custom SVG icons.

### API

* name: `'backButton'`
* activated?: `boolean`
* size?: `number`
* defaultActivatedColor?: `string`
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
#### Thursday, November 23th
- Rename `actived` prop into `activated`.
- Rename `defaultactivedColor` prop into `defaultActivatedColor`.

#### Wednesday, November 15th
- Initial release. We didn't track changes before this version.
