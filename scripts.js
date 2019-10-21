const googleDataBase = [
  'cats.com',
  'dogs.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
  'supercats.com',
  'myfavoritedogs.com'
]

// Passing the second parameter as a db, since we will mock it in the test.
const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('dog', googleDataBase))

module.exports = googleSearch