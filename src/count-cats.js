const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let countCats = 0;
  matrix.forEach(array => countCats += array.filter(item => item === "^^").length);
  return countCats;

};