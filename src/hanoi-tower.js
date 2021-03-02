const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const oneTurnDuration = 60 * 60 / turnsSpeed;
  const minNumberTurns = 2 ** disksNumber - 1;
  const seconds = Math.floor(minNumberTurns * oneTurnDuration);
  return {
    turns: minNumberTurns,
    seconds: seconds

  };
};
