const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Not Array');
  }
  let arrResult = arr.slice();
  for (let i = 0; i< arrResult.length; i++) {
    switch (arrResult[i]) {
      case '--discard-next': 
        arrResult[i] = null;
        arrResult[i+1]= null;
        break;
      case '--discard-prev':
        arrResult[i] = null;
        arrResult[i-1]= null;
        break;
      case '--double-next':
        if (i != arrResult.length-1) {
          arrResult[i] = arrResult[i+1];
        } else {
          arrResult[i] = null;
        }
        break;
      case '--double-prev':
        if (i) {
          arrResult[i] = arrResult[i-1];
        } else {
          arrResult[i] = null;
        }
        break;
    }
  }
  return arrResult.filter(item => item != null);
};
