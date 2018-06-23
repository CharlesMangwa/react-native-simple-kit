# Linking helpers 🔗

```Linking``` gives you a general interface to interact with both incoming and outgoing app links.

### ➜ Share

Open native modal to share content.

#### API

* ```share({ title: string, url: string, content: string, }): void```

#### Example

```jsx
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { share } from '@helpers/linking'

const MyComponent = (): React$Element<*> => (
  <TouchableWithoutFeedback onPress={() => share({
    title: 'Example',
    url: 'http://example.com',
    content: 'Lorem ipsum ...',
  })}>
    <Text>Share me</Text>
  </TouchableWithoutFeedback>
)

export default MyComponent
```

### ➜ Call

Call a phone number.

#### API

* ```call(phone: number): void```

#### Example

```jsx
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { call } from '@helpers/linking'

const MyComponent = (): React$Element<*> => (
  <TouchableWithoutFeedback onPress={() => call('0607080910')}>
    <Text>Call me</Text>
  </TouchableWithoutFeedback>
)

export default MyComponent
```

### ➜ Email

Open mail client from a given email address.

#### API

* ```email(address: string): void```

#### Example

```jsx
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { email } from '@helpers/linking'

const MyComponent = (): React$Element<*> => (
  <TouchableWithoutFeedback onPress={() => email('hello@spotern.com')}>
    <Text>Email me</Text>
  </TouchableWithoutFeedback>
)

export default MyComponent
```

### ➜ URL

Open an URL.

#### API

* ```openURL(url: string): void```

#### Example

```jsx
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { openURL } from '@helpers/linking'

const MyComponent = (): React$Element<*> => (
  <TouchableWithoutFeedback onPress={() => openURL('spotern.com')}>
    <Text>Open the URL</Text>
  </TouchableWithoutFeedback>
)

export default MyComponent
```

### ➜ Navigation

Open Plans (iOS) or Google Maps (Android) based on given coordinates.

#### API

* ```startNavigation(coordinates: { latitude: number, longitude: number, name: string }): void```

#### Example

```jsx
import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import { startNavigation } from '@helpers/linking'

const onPress = () =>
  startNavigation({
    latitude: 48.8704448,
    longitude: 2.3452463,
    name: 'Spotern',
  })

const MyComponent = (): React$Element<*> => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text>Go to location</Text>
    </TouchableWithoutFeedback>
  )
}

export default MyComponent
```

## Changelog
#### Wednesday, November 15th
- Initial release. We didn't track changes before this version.
