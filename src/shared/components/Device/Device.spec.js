import React from 'react'
import { View } from 'react-native'
import TestRenderer from 'react-test-renderer'
import Device from './index.js'

describe('📱 Generic component: <Device />', () => {
  it('should render `<Device.Provider />` correctly', () => {
    const component = TestRenderer.create(
      <Device.Provider>
        <View />
      </Device.Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render `<Device.Consumer />` correctly', () => {
    const component = TestRenderer.create(
      <Device.Consumer>{() => <View />}</Device.Consumer>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should pass correct data to `<Device.Consumer />`', () => {
    const expectedData = {
      appState: 'active',
      isConnected: false,
      height: 815,
      platform: 'ios',
      width: '375',
    }
    let receivedData = null
    TestRenderer.create(
      <Device.Provider value={expectedData}>
        <Device.Consumer>
          {props => {
            receivedData = props
            return null
          }}
        </Device.Consumer>
      </Device.Provider>
    )
    expect(receivedData).toMatchObject(expectedData)
  })
})
