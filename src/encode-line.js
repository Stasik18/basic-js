const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return ''
  let copy = str.split('')
  let count = 1
  let result = ''

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === copy[i + 1]) {
      count++
    } else if (count > 1) {
      result += count + copy[i]
      count = 1
    } else {
      result += copy[i]
    }
    if (count > 1 && copy[i + 1] === undefined) {
      result += copy[i]
    }
  }
  return result
}

module.exports = {
  encodeLine
};
