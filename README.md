# react-native-simple-kit

[![CircleCI](https://circleci.com/gh/CharlesMangwa/react-native-simple-kit.svg?style=shield&circle-token=7207fcf84efb2248759b3c51536c57a61d074712)](https://circleci.com/gh/CharlesMangwa/react-native-simple-kit)
[![Coverage Status](https://coveralls.io/repos/github/CharlesMangwa/react-native-simple-kit/badge.svg?branch=master)](https://coveralls.io/github/CharlesMangwa/react-native-simple-kit?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://img.shields.io/badge/License-MIT-brightgreen.svg)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub package version](https://img.shields.io/github/tag/CharlesMangwa/react-native-simple-kit.svg)]()

`react-native-simple-kit` is a starter boilerplate for mobile apps using React Native, Redux and a bunch of other cool tools. This starter is compatible with both iOS and Android out of the box, and provides both JS & native-based navigation solutions! 🤙

## Introduction

RNSK provides 2 different navigation libraries: [React Router Navigation](https://github.com/LeoLeBras/react-router-navigation) & [React Native Navigation](https://wix.github.io/react-native-navigation/v2/). The reason behind this is that they are respectively a JavaScript and a native-based solution. They both have pros & cons so you'll have to pick the one you like the most. The JavaScript one (here on [master](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/)), has a way more flexible API and it's easier to grasp; while the native one (on [native-navigation](https://github.com/CharlesMangwa/react-native-simple-kit/tree/native-navigation/) branch) is a little bit more cumbersome to use, but offers a better navigation experience to your end consumer. It's up to you!

## Requirements

- [Node](https://nodejs.org) `8` or newer
- [React Native CLI](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) `9.3` or newer for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) `3.0` or newer for Android development
- [Android SDK](https://developer.android.com/sdk/) `25` for Android development
- [Android](https://www.android.com/) `7.0` or newer on your Android device to test properly
- [ESLint](http://eslint.org/) `4.11.0` or newer to lint your code on fly

See [React Native's Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack

- [React Native](https://facebook.github.io/react-native/) `0.55.4` for building native apps using React
- [Redux](http://redux.js.org/) `3.7.2` a predictable state container for JavaScript apps
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [React Router Navigation](https://github.com/LeoLeBras/react-router-navigation) `1.0.0` a complete navigation library for React Native based on React Router v4
- [Flow](http://flowtype.org/) `0.63.0` a static type checker for JavaScript
- [Jest](https://facebook.github.io/jest/) `21.2.1` delightful JavaScript testing

## Make the magic happen

Just clone the repo and start (assuming you're using [Yarn](https://yarnpkg.com)):
```shell
$ git clone https://github.com/CharlesMangwa/react-native-simple-kit.git myAwesomeApp
$ cd myAwesomeApp
$ yarn
$ yarn start
```

## Motivations

There are mainly 2 reasons why this project exists. One of them is: **evolution**. I've been using React Native since `v0.5` back in mid-2014, and my conception of the "best" project structure has always been evolving.

That's why from one project to another, I used to copy/paste the whole previous project, remove all the business logic, and then use it as my starter. Then another project. More modifications. Copy/paste. Start all over again. As you can understand: I really needed something that I can just fork, use for a project, modify at the root when needed, and...that's it! No need to waste my time removing project specific code, and I'll still have what I consider as a good starter kit.

That was the first reason. The second one is just: **community**. I think there are some people out there who probably feel the same need. So enjoy!

## Project structure

This project structure is by no means "**THE**" perfect project structure. It's just the one which is currently making more sense to me than any other else, after several tries. Long story short: I divide my apps by `scenes`, scenes which contain several `modules` that can use that scene's `components`. That's it. Give it a try, you might be surprised how intuitive it could be. Anyhow: feel free to modify this structure and even send some PRs if you find a way to improve it!

```
...
src
├── app
│   ├── scenes
│   │   └── xxx
│   │       ├── components
│   │       ├── modules
│   │       ├── index.js
│   │       └── styles.js
│   └── index.js
├── config
│   └── index.js
├── helpers
│   └── xxx
│       └── index.js
├── shared
│   ├── assets
│   ├── components
│   └── theme
├── redux
│   ├── modules
│   │   └── xxx
│   │       ├── index.js
│   │       └── types.js
│   ├── actions.js
│   ├── index.js
│   └── reducers.js
├── types
│   └── index.js
└── index.js
...
```

## Components

`react-native-simple-kit` (RNSK) comes with a bunch of components, ready to use right out the box! You can have fun with:
* [```🔘 <Button />```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/shared/components/Button)
* [```💠 <Icon />```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/shared/components/Icon)
* [```🔲 <Modal />```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/shared/components/Modal)
* [```✍️ <TextInput />```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/shared/components/TextInput)
* [```👇 <Touchable />```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/shared/components/Touchable)

Make sure to check their individual documentation if you want to see more: [`/src/shared/components`](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/shared/components).

## Helpers

Just like the components, you also have a bunch of helpers that can be useful to you as a React Native developer. You have access to:
* [```💠 Icon```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/helpers/icon)
* [```🔗 Linking (call, email, openURL, share, startNavigation)```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/helpers/linking)
* [```📱 Responsive (mq, rem, vh, vw)```](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/helpers/responsive)

Make sure to check their individual documentation if you want to see more: [`/src/helpers`](https://github.com/CharlesMangwa/react-native-simple-kit/tree/master/src/helpers).

## Tests

Tests have been split into several tools & steps. Basically, with RNSK you'll deal with:

* **ESLint**, which makes sure that you keep the same patterns throughout the app
* **Flow**, which enables static type checking in your JavaScript code
* **Jest**, which runs your unit tests

They all constitute the backbone of the `yarn test` command:

```shell
$ eslint . && flow --show-all-errors && jest
````

This is run by [CircleCI 2.0](https://circleci.com/gh/CharlesMangwa/react-native-simple-kit) to make sure that we keep everything clean, up & running: [![CircleCI](https://circleci.com/gh/CharlesMangwa/react-native-simple-kit.svg?style=shield&circle-token=7207fcf84efb2248759b3c51536c57a61d074712)]

So let's break it down piece by piece.

### ESLint

_This config lives inside `.eslintrc`_

```shell
$ eslint .
```

The lint rules are based on **Airbnb, Flow & React configs**, plus some custom tweaks. The purpose of this tool is to keep a constant style in the codebase. Make sure to keep it in the green, and watch out while using [Prettier](https://github.com/prettier/prettier): it may bring unforeseen changes. That's why you should make sure to have Prettier installed on your IDE just in case. You can also run `yarn prettier` to automatically prettify your entire codebase!

### Flow

_This config lives inside `.flowconfig`_

```shell
$ flow --show-all-errors
```

Flow is used to type check our JavaScript statically, make sure to use the same version as React Native!

##### Use

The idea is: whenever you use a function, a module, a class, etc, you have to type both its input and output. For instance:

```jsx
/* @flow */

import React from 'react'
import { View, Text } from 'react-native'

import { History, Location } from '@types'

type Status = boolean

type Component = {
  status: Status,
}

type Props = {
  history: History,
  location: Location,
}

type State = {
  isMounted: Status
}

const MyComponent = (ownProps: Component): React$Element<*> => (
  <View>
    <Text>
      {`MyClass is mounted: ${ownProps.status}`}
    </Text>
  </View>
)

export class MyClass extends React.Component<Props, State> {
  state: State = {
    isMounted: false
  }

  componentDidMount() {
    this.setState((state: State) => ({ isMounted: !state.isMounted }))
  }

  render() {
    return <MyComponent status={this.state.isMounted} />
  }
}
```

I personally use these 3 tools to keep my code clean, homogeneous, (sometimes 😅) performant and kinda organized. Obviously, this is just a starter kit: it's up to you to make any changes you'd like!

### Jest
_The tests live inside `/__tests__` & the config in `package.json`_

```shell
$ jest
```

RNSK uses Jest to manage unit testing inside the project. The goal is to test at least all the helpers functions & generic components. Make sure to always update your snapshots before pushing your work to the CI runner!

##### Continuous Integration (CI)

```shell
$ yarn run test-ci    # outputs 👇
$ eslint . && flow --show-all-errors && jest --coverage && cat ./__tests__/__coverage__/lcov.info  | ./node_modules/coveralls/bin/coveralls.js
```

This whole test suite is implemented inside CircleCI 2.0 as mentioned earlier. A new job is run in the pipeline after each commit. The output of the latest job is displayed at the top of the current README and lets you know if it `passed` or `failed`. No need to say that the goal is to keep it ✅!

Moreover, RNSK uses `jest --coverage` output to generate a code coverage report that you can use with tools like [Coveralls.io](htps://coveralls.io). Then, we can get a badge which shows our coverage status: [![Coverage Status](https://coveralls.io/repos/github/CharlesMangwa/react-native-simple-kit/badge.svg?branch=master)](https://coveralls.io/github/CharlesMangwa/react-native-simple-kit?branch=master).
Pretty cool, heh?

## Use

From this point, it's up to you! This is the part where I stop writing and let you explore & have some fun 👍

## Questions
If you have any questions, feel free to get in touch on Twitter [@Charles_Mangwa](https://twitter.com/Charles_Mangwa)!
