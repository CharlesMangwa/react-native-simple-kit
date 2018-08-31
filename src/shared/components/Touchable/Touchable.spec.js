/* eslint-disable */

import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { Text } from 'react-native'
import Touchable from './index.js'

describe('👇 Generic component: <Touchable />', () => {
  let component, onLongPress, onPress, output, renderer
  beforeEach(() => {
    onPress = jest.fn()
    onLongPress = jest.fn()
    renderer = new ShallowRenderer()
    component = TestRenderer.create(
      <Touchable>
        <Text>Hey!</Text>
      </Touchable>
    )
    renderer.render(
      <Touchable onLongPress={() => onLongPress()} onPress={() => onPress()}>
        <Text>Doing well?</Text>
      </Touchable>
    )
    output = renderer.getRenderOutput()
  })
  afterEach(() => jest.clearAllMocks())
  it('should render correctly', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should call onPress when pressed', () => {
    output.props.onPress()
    expect(onPress).toBeCalled()
  })
  it('should call onLongPress when pressed', () => {
    output.props.onLongPress()
    expect(onLongPress).toBeCalled()
  })
  it('should throw an error when no children is passed', () => {
    const renderer = new ShallowRenderer()
    expect(() => renderer.render(<Touchable />)).toThrowError(
      'Touchable requires at least 1 children'
    )
  })
})
