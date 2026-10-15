const { NotImplementedError, test } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) return;

  const result = [];
  const discarded = new Set();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item === "--double-next") {
      const next = i + 1;
      if (next < arr.length && !discarded.has(next)) {
        result.push(arr[next], arr[next]);
        i++;
      }
    } else if (item === "--double-prev") {
      const prev = i - 1;
      if (prev >= 0 && !discarded.has(prev)) {
        result.push(arr[prev]);
      }
    } else if (item === "--discard-next") {
      const next = i + 1;
      if (next < arr.length && !discarded.has(next)) {
        discarded.add(next);
      }
      i++;
    } else if (item === "--discard-prev") {
      const prev = i - 1;
      if (prev >= 0 && !discarded.has(prev)) {
        discarded.add(prev);
        result.pop();
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = {
  transform,
};
