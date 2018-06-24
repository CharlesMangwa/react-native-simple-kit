import '@mocks/SVG'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Icon from '@components/Icon'

describe('Generic component: <Icon />', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(<Icon name="backButton" size={15} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders activated version correctly', () => {
    const component = TestRenderer.create(
      <Icon activated name="backButton" size={15} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with activated version with custom color correctly', () => {
    const component = TestRenderer.create(
      <Icon
        activated
        defaultActivatedColor="#5AADEB"
        name="backButton"
        size={15}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with defaultColor correctly', () => {
    const component = TestRenderer.create(
      <Icon defaultColor="#333333" name="backButton" size={15} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("throws when the required SVG doesn't exist", () => {
    const renderer = new ShallowRenderer()
    expect(() =>
      renderer.render(<Icon name="throw me an error!" size={15} />)
    ).toThrowError('Invalid SVG name: throw me an error!')
  })
})
