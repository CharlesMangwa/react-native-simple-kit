# Responsive helpers 📱

### ➜ Viewport units
Length units representing 1% of the viewport size for viewport width  ```vw```, height ```vh```.

#### API
* ```vw(value: number): number```
* ```vh(value: number): number```

#### Example
```jsx
import { StyleSheet } from 'react-native'
import { vw, vh } from '@helpers/response'

const styles = StyleSheet.create({
  container: {
    width: vw(89), // 89% of width viewport size
    height: vh(95), // 89% of height viewport size
  },
})
```


### ➜ Rem unit
This unit represents the font-size of the root element specify with ```DEFAULT_RESPONSIVE_FONT_SIZE``` in ```@theme/fonts```. As you can guess, this is heavily inspired by the `rem` unit used by Front-End developers: you just pass a `px` value you'd like to see convert into `"rem"`.

#### API
* ```rem(value: number): number```

#### Example
```jsx
import { StyleSheet } from 'react-native'
import { rem } from '@helpers/response'

const styles = StyleSheet.create({
  text: {
    fontSize: rem(20),
  },
})
```

### ➜ Media queries
A media query consists of a media type and zero or more expressions that limit the style sheets' scope by using media features, such as width.

#### API
* ```mq(value: Breakpoints, input: StyleSheet): StyleSheet```

#### Example
```jsx
import { StyleSheet } from 'react-native'
import { mq } from '@helpers/response'

const styles = StyleSheet.create({
  text: {
    ...mq({ maxWidth: 400 }, {
      fontSize: rem(20),
    },
  }),
  ...mq({ minWidth: 300 }, {
    container: {
      width: 30,
    },
  },
})
```

## Changelog
#### Wednesday, November 15th
- Initial release. We didn't track changes before this version.
