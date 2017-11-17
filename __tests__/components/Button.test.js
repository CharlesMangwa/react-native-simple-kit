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
        <Button
          onPress={() => console.log('Success ✅')}
          text="Hello!"
        />
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onPress when pressed', () => {
    const renderer = new ShallowRenderer()
    const onPress = jest.fn()

    renderer.render((
      <Button
        onPress={() => onPress()}
        text="Hello!"
      />
    ))

    const output = renderer.getRenderOutput()
    output.props.onPress()

    expect(onPress).toBeCalled()
  })

  it('renders children if passed', () => {
    const component = TestRenderer.create(
      <NativeRouter>
        <Button
          onPress={() => console.log('Success ✅')}
        >
          <Text>Hello!</Text>
        </Button>
      </NativeRouter>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
