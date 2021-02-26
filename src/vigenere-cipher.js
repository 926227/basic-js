const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(direct = true) {
    this._DIRECT = direct;
    this._ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new TypeError();
    }
    let result = '';
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    
    for (let i = 0; i < str.length; i++) {
      if (this._ALPHABET.includes(str[i])) {
        if (key.length < str.length) {
          key.push(key[i]);
        }
        let strI = this._ALPHABET.indexOf(str[i]);
        let keyI = this._ALPHABET.indexOf(key[i]);
        result += this._ALPHABET[(((this._ALPHABET.length + (strI + keyI)) % this._ALPHABET.length))];
      } else {
        result +=str[i];
        key.splice(i,0, ' ');
      }
    }
    
    return this._DIRECT ? result : result.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new TypeError();
    }
    let result = '';
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    for (let i = 0; i < str.length; i++) {
      if (this._ALPHABET.includes(str[i])) {
        if (key.length < str.length) {
          key.push(key[i]);
        }
        let strI = this._ALPHABET.indexOf(str[i]);
        let keyI = this._ALPHABET.indexOf(key[i]);
        result += this._ALPHABET[(((this._ALPHABET.length + (strI - keyI)) % this._ALPHABET.length))];
      } else {
        result +=str[i];
        key.splice(i,0, ' ');
      }
    }
    return this._DIRECT ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
