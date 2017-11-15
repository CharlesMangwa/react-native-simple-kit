/* eslint global-require: 0 */

jest.mock('Platform', () => {
  const RealComponent = require.requireActual('Platform')
  const React = require('react')

  const Platform = ({ children }) =>
    React.createElement('Platform', {}, children)
  Platform.propTypes = RealComponent.propTypes
  return Platform
})
