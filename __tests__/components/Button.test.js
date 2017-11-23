import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

import { Text } from 'react-native'
import { NativeRouter } from 'react-router-native'
import Button from '@components/Button'

describe('Generic component: <Button />', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <NativeRouter>
        <Button onPress={() => jest.fn()} text="Hello!" />
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders children if passed', () => {
    const component = TestRenderer.create(
      <NativeRouter>
        <Button onPress={() => jest.fn()}>
          <Text>Wassup!</Text>
        </Button>
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with inactive prop', () => {
    const component = TestRenderer.create(
      <NativeRouter>
        <Button inactive onPress={() => jest.fn()} text="Having a good day?" />
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with color prop', () => {
    const component = TestRenderer.create(
      <NativeRouter>
        <Button
          color="yellow"
          onPress={() => jest.fn()}
          text="Hope you like what you see so far"
        />
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with color & inactive props', () => {
    const component = TestRenderer.create(
      <NativeRouter>
        <Button
          inactive
          color="red"
          onPress={() => jest.fn()}
          text="Feel free to leave a ⭐!"
        />
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onPress when pressed', () => {
    const renderer = new ShallowRenderer()
    const onPress = jest.fn()

    renderer.render(
      <Button onPress={() => onPress()} text="And submit a PR if need!" />,
    )

    const output = renderer.getRenderOutput()
    output.props.onPress()

    expect(onPress).toBeCalled()
  })

  it('throws when no children nor text prop is passed', () => {
    const renderer = new ShallowRenderer()
    expect(() => renderer.render(<Button />)).toThrowError(
      'Button requires at least 1 children or a `text`s prop',
    )
  })

  it('throws when no onPress nor to prop is passed', () => {
    const renderer = new ShallowRenderer()
    expect(() => renderer.render(<Button text="Deuces!" />)).toThrowError(
      'Button requires at least an `onPress` or `to` prop',
    )
  })

  it('calls defaultProps when needed', () => {

  })
})
