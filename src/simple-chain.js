const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */

function chainMakerF() {
  const chain = [];
  const chainMaker = {
    getLength() {},
    addLink(value) {
      chain.push(`( ${value} )`);
      return this;
    },
    removeLink(position) {
      if (
        typeof position === "number" &&
        position >= 1 &&
        position < chain.length
      ) {
        chain.splice(position - 1, 1);
        return this;
      }

      chain.length = 0;
    },
    reverseChain() {
      chain.reverse();
      return this;
    },
    finishChain() {
      let result = chain.join("~~");
      chain.length = 0;
      return result;
    },
  };

  return chainMaker;
}

module.exports = {
  chainMaker: chainMakerF(),
};
