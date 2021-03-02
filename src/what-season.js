const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!(date)) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    const month = date.getMonth();
    if (2 <= month && month <= 4) {
      return "spring";
    }
    if (5 <= month && month <= 7) {
      return "summer";
    }
    if (8 <= month && month <= 10) {
      return "autumn";
    }
    if (month == 11 || month == 0 || month == 1) {
      return "winter";
    }
  } else {
    throw new Error();
  }
};
