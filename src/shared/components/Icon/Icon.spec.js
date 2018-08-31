import './mock.js'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Icon from './index.js'

describe('💠 Generic component: <Icon />', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(<Icon name="backButton" size={15} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render activated version correctly', () => {
    const component = TestRenderer.create(
      <Icon activated name="backButton" size={15} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render with activated version with custom color correctly', () => {
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
  it('should render with defaultColor correctly', () => {
    const component = TestRenderer.create(
      <Icon defaultColor="#333333" name="backButton" size={15} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("should throw when the required SVG doesn't exist", () => {
    const renderer = new ShallowRenderer()
    expect(() =>
      renderer.render(<Icon name="throw me an error!" size={15} />)
    ).toThrowError('Invalid SVG name: throw me an error!')
  })
})
