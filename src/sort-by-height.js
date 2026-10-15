const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copy = [...arr];
  for (let i = 0; i < copy.length; i++) {
    let minIndex = i;
    let temp = 0;
    if (copy[i] === -1) continue;
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[j] !== -1 && copy[j] < copy[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      temp = copy[i];
      copy[i] = copy[minIndex];
      copy[minIndex] = temp;
    }
  }

  return copy;
}

module.exports = {
  sortByHeight,
};
