import '@mocks/SVG'
import 'react-native'
import renderer from 'react-test-renderer'
import getIcon from '@helpers/icon'

describe('Helper function: getIcon', () => {
  test('renders correctly', () => {
    const component = renderer.create(getIcon('backButton', 100))
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('renders with actived parameter', () => {
    const component = renderer.create(getIcon('backButton', 100, true))
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('renders with color parameter', () => {
    const component = renderer.create(
      getIcon('backButton', 100, false, '#122E46'),
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
