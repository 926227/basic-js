const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let resultDepth = depth;
    for (let i = 0; i < arr.length; i++) {
      let itemDepth = 0;
      if (Array.isArray(arr[i])) {
        itemDepth = this.calculateDepth(arr[i], depth+1);
      }
      resultDepth < itemDepth ? resultDepth = itemDepth : resultDepth;
    }
    return resultDepth;
  }
};