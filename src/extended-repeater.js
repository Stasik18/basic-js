const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (!options) return str;
  let {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;
  const exampleAddition =
    additionRepeatTimes > 1
      ? new Array(additionRepeatTimes)
          .fill(`${addition}`)
          .join(additionSeparator)
      : addition;

  return repeatTimes > 1
    ? new Array(repeatTimes).fill(str + exampleAddition).join(separator)
    : str + exampleAddition;
}

module.exports = {
  repeater,
};
