import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { Text } from 'react-native'
import Touchable from '@components/Touchable'

describe('Generic component: <Touchable />', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <Touchable>
        <Text>Hey!</Text>
      </Touchable>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onPress when pressed', () => {
    const renderer = new ShallowRenderer()
    const onPress = jest.fn()

    renderer.render((
      <Touchable onPress={() => onPress()}>
        <Text>Doing well?</Text>
      </Touchable>
    ))

    const output = renderer.getRenderOutput()
    output.props.onPress()

    expect(onPress).toBeCalled()
  })

  it('calls onLongPress when pressed', () => {
    const renderer = new ShallowRenderer()
    const onPress = jest.fn()

    renderer.render((
      <Touchable onLongPress={() => onPress()}>
        <Text>I hope so!</Text>
      </Touchable>
    ))

    const output = renderer.getRenderOutput()
    output.props.onLongPress()

    expect(onPress).toBeCalled()
  })
})
