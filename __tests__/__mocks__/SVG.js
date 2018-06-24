/* eslint global-require: 0 */

jest.mock('react-native-svg', () => {
  const React = require('react')
  // eslint-disable-next-line no-undef
  const ReactNativeSvg = jest.genMockFromModule('react-native-svg')

  const svgElementMockGenerator = (name, propTypes) => {
    const SvgMock = () => React.createElement(name, null, null)

    SvgMock.displayName = name
    SvgMock.propTypes = propTypes

    return SvgMock
  }

  const Svg = svgElementMockGenerator('Svg', ReactNativeSvg.Svg.propTypes)

  Svg.Circle = svgElementMockGenerator(
    'Circle',
    ReactNativeSvg.Circle.propTypes
  )
  Svg.Defs = svgElementMockGenerator('Defs', ReactNativeSvg.Defs.propTypes)
  Svg.G = svgElementMockGenerator('G', ReactNativeSvg.G.propTypes)
  Svg.Path = svgElementMockGenerator('Path', ReactNativeSvg.Path.propTypes)
  Svg.Rect = svgElementMockGenerator('Rect', ReactNativeSvg.Rect.propTypes)
  Svg.Stop = svgElementMockGenerator('Stop', ReactNativeSvg.Stop.propTypes)
  Svg.Symbol = svgElementMockGenerator(
    'Symbol',
    ReactNativeSvg.Symbol.propTypes
  )
  Svg.Use = svgElementMockGenerator('Use', ReactNativeSvg.Use.propTypes)

  return Svg
})
