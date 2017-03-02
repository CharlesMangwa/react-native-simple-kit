# Responsive helper :iphone:

## Doc

### Viewport units
Length units representing 1% of the viewport size for viewport width  ```vw```, height ```vh```.

#### API
* ```vw(value: Number): Number```
* ```vh(value: Number): Number```

#### Example
``` js
import { StyleSheet } from 'react-native'
import { vw, vh } from '@helpers/response'

const styles = StyleSheet.create({
  container: {
    width: vw(89), // 89% of width viewport size
    height: vh(95), // 89% of height viewport size
  },
})
```


### Rem unit
This unit represents the font-size of the root element specify with ```DEFAULT_RESPONSIVE_FONT_SIZE``` in ```@theme/fonts```.

#### API
* ```rem(value: Number): Number```

#### Example
``` js
import { StyleSheet } from 'react-native'
import { rem } from '@helpers/response'

const styles = StyleSheet.create({
  text: {
    fontSize: rem(20),
  },
})
```

### Media queries
A media query consists of a media type and zero or more expressions that limit the style sheets' scope by using media features, such as width.

#### API
* ```mq(value: Breakpoints, input: StyleSheet): StyleSheet```

#### Example
``` js
import { StyleSheet } from 'react-native'
import { mq } from '@helpers/response'

const styles = StyleSheet.create({
  text: {
    ...mq({ maxWidth: 400 }, {
      fontSize: rem(20),
    },
  },
  ...mq({ minWidth: 300 }, {
    container: {
      width: 30,
    },
  },
})
```

## Change log
### Friday, September 10th
* Initial release. We didn't track changes before this version.
