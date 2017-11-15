/* eslint global-require: 0 */

jest.mock('Text', () => {
  const RealComponent = require.requireActual('Text')
  const React = require('react')

  const Text = ({ children }) => React.createElement('Text', {}, children)
  Text.propTypes = RealComponent.propTypes
  return Text
})
