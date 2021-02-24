const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  clearChain(){
    this.chain = [];
  },
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number') {
      this.clearChain();
      throw new TypeError('Invalid type');
    }
    if (this.chain.splice((position - 1), 1).length === 0) {
      this.clearChain();
      throw new RangeError('Wring position');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map(item => `( ${item} )~~`).join('').slice(0, -2);
    this.clearChain();
    return result;
  }
};

module.exports = chainMaker;
