const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = isReverse;
  }
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let flag = 0;
    for (let latter of text) {
      if (flag > key.length - 1) flag = 0;

      let code = latter.toUpperCase().charCodeAt();

      if (code >= 65 && code <= 90) {
        let position = key.toUpperCase().charCodeAt(flag) - 65;

        result += String.fromCharCode(((code - 65 + position) % 26) + 65);
        flag++;
      } else {
        result += latter;
      }
    }

    return this.isReverse ? result : result.split("").reverse().join("");
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let flag = 0;
    for (let latter of text) {
      if (flag > key.length - 1) flag = 0;

      let code = latter.toUpperCase().charCodeAt();

      if (code >= 65 && code <= 90) {
        let position = key.toUpperCase().charCodeAt(flag) - 65;
        console.log(latter);
        result += String.fromCharCode(((code - 65 - position + 26) % 26) + 65);
        flag++;
      } else {
        result += latter;
      }
    }

    return this.isReverse ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
