/* eslint global-require: 0 */

jest.mock('TouchableNativeFeedback', () => {
  const RealComponent = require.requireActual('TouchableNativeFeedback')
  const React = require('react')

  const TouchableNativeFeedback = ({ children, onPress }) =>
    React.createElement('TouchableNativeFeedback', { onPress }, children)
  TouchableNativeFeedback.propTypes = RealComponent.propTypes
  return TouchableNativeFeedback
})
