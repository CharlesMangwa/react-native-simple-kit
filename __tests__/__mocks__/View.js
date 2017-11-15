/* eslint global-require: 0 */

jest.mock('View', () => {
  const RealComponent = require.requireActual('View')
  const React = require('react')

  const View = ({ children }) => React.createElement('View', {}, children)
  View.propTypes = RealComponent.propTypes
  return View
})
