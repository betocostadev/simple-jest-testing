/* Scripts for Async tests
Using the Star Wars API: https://swapi.co/
Also using the NPM package node-fetch, because fetch is a web API and will not work here */
const fetch = require('node-fetch')

const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people')
  const data = await getRequest.json()
  // console.log(data)
  return {
    count: data.count,
    results: data.results
  }
}

// getPeople(fetch)

module.exports = {
  getPeople,
  getPeoplePromise
}

