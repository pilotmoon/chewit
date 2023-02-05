"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = void 0;
const node_crypto_1 = require("node:crypto");
const alphabets_1 = require("./alphabets");
const baseEncode_1 = require("./baseEncode");
// generate a random string of the given length using the given alphabet
function randomString(
  { length = 24, alphabet = alphabets_1.alphabets.base62 } = {},
) {
  // number of random bytes needed meet the required output length
  const n = Math.ceil(length * Math.log2(alphabet.length) / Math.log2(256));
  // encode random bytes in the output alphabet
  const encoded = (0, baseEncode_1.baseEncode)([
    ...(0, node_crypto_1.randomBytes)(n),
  ], alphabet);
  // trim characters off the front to meet required length
  return encoded.slice(encoded.length - length);
}
exports.randomString = randomString;
