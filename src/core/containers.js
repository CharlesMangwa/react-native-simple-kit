/* @flow */
/* eslint react/prefer-stateless-function: 0 */

import React from 'react'
import Navigation from 'react-native-navigation'
import { Provider } from 'react-redux'

import store from '@store'
import { Counter, Home, Launch, Menu } from '@containers'

const createContainer = (container: Class<*>): Class<any> => {
  return (): Class<*> =>
    class ConnectContainer extends React.Component<*, void> {
      render() {
        return (
          <Provider store={store}>
            {React.createElement(container, { ...this.props })}
          </Provider>
        )
      }
    }
}

const registerContainers = (): void => {
  Navigation.registerContainer('app.launch', createContainer(Launch))
  Navigation.registerContainer('app.menu', createContainer(Menu))
  Navigation.registerContainer('app.home', createContainer(Home))
  Navigation.registerContainer('app.counter', createContainer(Counter))
}

export default registerContainers
