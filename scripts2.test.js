const fetch = require('node-fetch')
const swapi = require('./scripts2')

// Using the done, we make sure it will only check the results after it is done
// assertions are the number of tests to wait before it ends
it('calls swapi to get people', (done) => {
  expect.assertions(1)
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
    done()
  })
})
// We are doing the same thing here, but instead of done, we use the return, to wait for the return.
it('calls swapi to get people with a promise', () => {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5)
  })
})

// Mocking the tests to avoid having to wait for each call

it('getPeople returns count and results', () => {
  const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 87,
        results: [1, 2, 3, 4, 5, 6]
      })
    }))

  expect.assertions(4)
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1)
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people')
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5)
  })
})

