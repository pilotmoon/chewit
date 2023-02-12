"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = exports.defaultRng = void 0;
const node_crypto_1 = require("node:crypto");
const alphabets_1 = require("./alphabets");
const baseEncode_1 = require("./baseEncode");
// default RNG, for node
function defaultRng(size) {
  return [...(0, node_crypto_1.randomBytes)(size)];
}
exports.defaultRng = defaultRng;
// generate a random string of the given length using the given alphabet
function randomString(
  { length = 24, alphabet = alphabets_1.alphabets.base62, rng = defaultRng } =
    {},
) {
  // number of random bytes needed meet the required output length
  const size = Math.ceil(length * Math.log2(alphabet.length) / Math.log2(256));
  // encode random bytes in the output alphabet
  const encoded = (0, baseEncode_1.baseEncode)(rng(size), alphabet, {
    trim: false,
  });
  // trim characters off the front to meet required length
  return encoded.slice(encoded.length - length);
}
exports.randomString = randomString;
