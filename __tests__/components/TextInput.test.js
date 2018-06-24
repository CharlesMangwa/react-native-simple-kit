import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import TextInput from '@components/TextInput'

describe('Generic component: <TextInput />', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <TextInput placeholder="I'm rendered \o/" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
