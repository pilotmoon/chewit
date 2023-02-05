"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseEncode = void 0;
const baseConvert_1 = require("./baseConvert");
// encode a base256 array to given alphabet
function baseEncode(array, alphabet) {
  return (0, baseConvert_1.baseConvert)(array, 256, alphabet.length)
    .map((value) => alphabet[value])
    .join("");
}
exports.baseEncode = baseEncode;
