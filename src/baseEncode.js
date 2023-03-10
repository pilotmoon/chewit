"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseDecode = exports.baseEncode = void 0;
const baseConvert_1 = require("./baseConvert");
// encode a base256 array to given alphabet.
// when trim=true, remove leading zero values.
function baseEncode(array, alphabet, { trim = true } = {}) {
  const converted = (0, baseConvert_1.baseConvert)(array, 256, alphabet.length);
  if (trim) {
    while (converted[0] === 0) {
      converted.shift();
    }
  }
  return converted
    .map((value) => alphabet[value])
    .join("");
}
exports.baseEncode = baseEncode;
// decode a string in given alphabet to base256 array.
// when trim=true, remove leading zero values.
function baseDecode(string, alphabet, { trim = true } = {}) {
  const values = string
    .split("")
    .map((char) => alphabet.indexOf(char));
  const converted = (0, baseConvert_1.baseConvert)(
    values,
    alphabet.length,
    256,
  );
  if (trim) {
    while (converted[0] === 0) {
      converted.shift();
    }
  }
  return converted;
}
exports.baseDecode = baseDecode;
