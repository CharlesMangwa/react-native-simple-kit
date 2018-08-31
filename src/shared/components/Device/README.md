# Device 📱

A generic component to get access to the device's important infos.

### API

**No props needed**. If you want to change anything, you'll have to modify `src/components/Device/index.js` but also `<Device.Provider />` at the root of the project (`src/index.js`).

### Example

##### ./src/index.js

```jsx
/* @flow */
import React from 'react'
import { AppState, Dimensions, SafeAreaView, Text } from 'react-native'
import Device from '@components/Device'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView>
    <Device.Provider
      value={{
        appState: AppState.currentState,
        isConnected: false,
        height: Dimensions.get('window').height,
        platform: Platform.OS,
        width: Dimensions.get('window').width,
      }}
    >
      <Navigation />
    </Device.Provider>
  </SafeAreaView>
)

export default MyComponent
```

#### somewhere_in_the_app.js

```jsx
/* @flow */
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Device from '@components/Device'

const MyComponent = (): React$Element<*> => (
  <SafeAreaView>
    <Device.Consumer>
      {({ appState, height, isConnected, platform, width }) =>
        console.log(/* choose your weapon 😎 */)
      }
    </Device.Consumer>
  </SafeAreaView>
)

export default MyComponent
```

## Changelog

#### Friday, August 17th, 2018

- Initial release. We didn't track changes before this version.
