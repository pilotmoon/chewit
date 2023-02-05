"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.baseConvert)([1, 0, 0], 10, 16));
console.log((0, index_1.baseEncode)([0xff, 0xff], index_1.alphabets.base10));
console.log((0, index_1.randomString)());
console.log((0, index_1.randomString)({ length: 32 }));
console.log(
  (0, index_1.randomString)({
    length: 5,
    alphabet: index_1.alphabets.base58Flickr,
  }),
);
console.log(
  (0, index_1.randomString)({
    length: 6,
    alphabet: index_1.alphabets.base32Crockford,
  }),
);
console.log(
  (0, index_1.randomString)({ length: 6, alphabet: index_1.alphabets.base16 }),
);
console.log(
  (0, index_1.randomString)({ length: 3, alphabet: index_1.alphabets.base10 }),
);
