const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes = options.repeatTimes === undefined ? 1 : Number(options.repeatTimes);
  options.separator = options.separator === undefined ? '+' : String(options.separator);
  options.addition = options.addition === undefined ? '' : String(options.addition);
  options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : Number(options.additionRepeatTimes);
  options.additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);
  str = String(str);
  return (str +
          (options.addition + options.additionSeparator)
          .repeat(options.additionRepeatTimes) 
          .slice(0,-options.additionSeparator.length)
          + options.separator)
          .repeat(options.repeatTimes)
          .slice(0,-options.separator.length)
          ;
};
