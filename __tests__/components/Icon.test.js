import '@mocks/SVG'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Icon from '@components/Icon'

describe('Generic component: <Icon />', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <Icon
        name="backButton"
        size={15}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders actived version correctly', () => {
    const component = TestRenderer.create(
      <Icon
        actived
        name="backButton"
        size={15}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with actived version with custom color correctly', () => {
    const component = TestRenderer.create(
      <Icon
        actived
        defaultactivedColor="#5AADEB"
        name="backButton"
        size={15}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with defaultColor correctly', () => {
    const component = TestRenderer.create(
      <Icon
        defaultColor="#333333"
        name="backButton"
        size={15}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
