"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomIdentifier = exports.encodings = void 0;
const node_crypto_1 = require("node:crypto");
// Convert a number, expressed as an array of digits, from one base to another.
// Output array is always front zero-padded to max length.
// Adapted from https://github.com/novemberborn/base-convert-int-array
function baseConvert(array, fromBase, toBase) {
  const result = new Array(
    Math.ceil(array.length * Math.log2(fromBase) / Math.log2(toBase)),
  );
  let offset = result.length;
  let input = array;
  while (input.length > 0) {
    const quotients = [];
    let remainder = 0;
    for (const digit of input) {
      const acc = digit + remainder * fromBase;
      const q = Math.floor(acc / toBase);
      remainder = acc % toBase;
      if (quotients.length > 0 || q > 0) {
        quotients.push(q);
      }
    }
    result[--offset] = remainder;
    input = quotients;
  }
  // zero fill any remaining places
  while (offset > 0) {
    result[--offset] = 0;
  }
  return result;
}
// some common encodings
exports.encodings = {
  base62: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  crockfordBase32: "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
  hexadecimal: "0123456789ABCDEF",
  decimal: "0123456789",
};
function randomIdentifier(
  {
    entropyBytes = 18,
    encoding = exports.encodings.base62,
    prefix = "",
    trim = 1,
  } = {},
) {
  const randomArray = [...(0, node_crypto_1.randomBytes)(entropyBytes)];
  const converted = baseConvert(randomArray, 256, encoding.length).slice(trim);
  return prefix + converted.map((value) => encoding[value]).join("");
}
exports.randomIdentifier = randomIdentifier;
