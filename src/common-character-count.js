const { NotImplementedError } = require('../lib')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let copy1 = s1.split('').sort((a, b) => a.localeCompare(b))
  let copy2 = s2.split('').sort((a, b) => a.localeCompare(b))

  let result = 0
  copy1.forEach((elem) => {
    if (copy2.includes(elem)) {
      result++
      let index = copy2.findIndex((item) => item === elem)
      copy2.splice(index, 1)
    }
  })
  return result
}
module.exports = {
  getCommonCharacterCount,
}
