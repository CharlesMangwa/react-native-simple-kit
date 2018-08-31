import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

import { Text } from 'react-native'
import { TestButton as Button } from './index.js'

describe('🔘 Generic component: <Button />', () => {
  let navigation = { navigate: jest.fn() }
  beforeEach(() => {
    navigation = { navigate: jest.fn() }
  })
  it('should render correctly', () => {
    const component = TestRenderer.create(
      <Button navigation={navigation} onPress={() => jest.fn()} text="Hello!" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render children if passed', () => {
    const component = TestRenderer.create(
      <Button navigation={navigation} onPress={() => jest.fn()}>
        <Text>Wassup!</Text>
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render with inactive prop', () => {
    const component = TestRenderer.create(
      <Button
        inactive
        navigation={navigation}
        onPress={() => jest.fn()}
        text="Having a good day?"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render correctly with color prop', () => {
    const component = TestRenderer.create(
      <Button
        color="yellow"
        navigation={navigation}
        onPress={() => jest.fn()}
        text="Hope you like what you see so far"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render correctly with color & inactive props', () => {
    const component = TestRenderer.create(
      <Button
        inactive
        color="red"
        navigation={navigation}
        onPress={() => jest.fn()}
        text="Feel free to leave a ⭐!"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should call onPress when pressed', () => {
    const renderer = new ShallowRenderer()
    const onPress = jest.fn()
    renderer.render(
      <Button
        onPress={() => onPress()}
        navigation={navigation}
        text="And submit a PR if need!"
      />
    )
    const output = renderer.getRenderOutput()
    output.props.onPress()
    expect(onPress).toBeCalled()
  })
  it('should throw when no children nor text prop is passed', () => {
    const renderer = new ShallowRenderer()
    expect(() => renderer.render(<Button />)).toThrowError(
      'Button requires at least 1 children or a `text`s prop'
    )
  })
  it('should throw when no `onPress` nor `to` prop is passed', () => {
    const renderer = new ShallowRenderer()
    expect(() => renderer.render(<Button text="Deuces!" />)).toThrowError(
      'Button requires at least an `onPress` or `to` prop'
    )
  })
})
