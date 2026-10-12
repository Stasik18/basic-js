const { NotImplementedError } = require('../lib')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let result = ''
  const copy1 = members
    .filter((e) => typeof e === 'string')
    .sort((a, b) => (a.trim().toUpperCase() > b.trim().toUpperCase() ? 1 : -1))
  console.log(copy1)
  copy1.forEach((elem) => {
    result += elem.trim().charAt(0)
  })
  return result.trim().toUpperCase()
}

module.exports = {
  createDreamTeam,
}
