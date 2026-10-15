const { NotImplementedError } = require("../lib");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let copy = String(n).split("");

  while (copy.length !== 1) {
    copy = String(copy.reduce((acc, elem) => (acc += Number(elem)), 0)).split(
      "",
    );
  }

  return Number(copy);
}

module.exports = {
  getSumOfDigits,
};
