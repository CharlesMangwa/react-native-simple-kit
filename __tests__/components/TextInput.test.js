import React from 'react'
import renderer from 'react-test-renderer'
import TextInput from '@components/TextInput'

describe('Generic component: <TextInput />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <TextInput placeholder="I'm rendered \o/" />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
