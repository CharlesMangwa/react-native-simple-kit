/* eslint global-require: 0 */

jest.mock('TouchableOpacity', () => {
  const RealComponent = require.requireActual('TouchableOpacity')
  const React = require('react')

  const TouchableOpacity = ({ children, onPress }) =>
    React.createElement('TouchableOpacity', { onPress }, children)
  TouchableOpacity.propTypes = RealComponent.propTypes
  return TouchableOpacity
})
