const { NotImplementedError } = require('../lib')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let copy1 = String(n).split('')
  let copy2 = Number(copy1.slice(0, copy1.length - 1).join(''))
  for (let i = 0; i < copy1.length - 1; i++) {
    let interval = Number(
      copy1
        .slice(0, i)
        .concat(copy1.slice(i + 1, copy1.length))
        .join('')
    )
    if (interval > copy2) {
      copy2 = interval
    }
  }
  return copy2
}

module.exports = {
  deleteDigit,
}
