import React from 'react'
import TestRenderer from 'react-test-renderer'
import TextInput from './index.js'

describe('✍️ Generic component: <TextInput />', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(
      <TextInput placeholder="I'm rendered \o/" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
