import { call, email, openURL, share, startNavigation } from '@helpers/linking'

const callMock = jest.fn(phone => call(phone))
const emailMock = jest.fn(address => email(address))
const openURLMock = jest.fn(link => openURL(link))
const shareMock = jest.fn(content => share(content))
const startNavigationMock = jest.fn(coordinates => startNavigation(coordinates))

describe('Helper function: Linking', () => {
  it('call() operates correctly', () => {
    callMock('+330102030405')
    expect(callMock).toHaveBeenCalledTimes(1)
  })

  it('email() operates correctly', () => {
    emailMock('hello@github.com')
    expect(emailMock).toHaveBeenCalledTimes(1)
  })

  it('openURL() operates correctly', () => {
    openURLMock('htps://www.github.com')
    expect(openURLMock).toHaveBeenCalledTimes(1)
  })

  it('share() operates correctly', () => {
    expect.assertions(1)
    shareMock({
      title: 'githubTest',
      content: 'This is a pretty cool test, right?',
      url: 'htps://www.github.com',
    })
    expect(shareMock).toHaveBeenCalledTimes(1)
  })

  it('startNavigation() operates correctly', () => {
    startNavigationMock({
      latitude: 48.8705673,
      longitude: 2.3452987,
      name: 'Grand Rex',
    })
    expect(startNavigationMock).toHaveBeenCalledTimes(1)
  })
})
