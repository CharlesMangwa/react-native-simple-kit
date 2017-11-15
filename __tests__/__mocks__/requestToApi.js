/* eslint no-confusing-arrow: 0 */

const routes = [
  '/analytics',
  '',
]

const success = {
  status: true,
  result: [{
    id: 0,
  }],
}

const error = {
  status: false,
  error: 'ER000',
  message: 'The request failed.',
}

export default function request(input) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => routes[input]
        ? resolve(success)
        : reject(error),
    )
  })
}
