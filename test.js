"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.randomIdentifier)());
console.log(
  (0, index_1.randomIdentifier)({ prefix: "apikey_", entropyBytes: 24 }),
);
console.log((0, index_1.randomIdentifier)({
  prefix: "1",
  entropyBytes: 4,
  encoding: index_1.encodings.flickrBase58,
}));
console.log(
  (0, index_1.randomIdentifier)({
    entropyBytes: 4,
    encoding: index_1.encodings.crockfordBase32,
  }),
);
console.log(
  (0, index_1.randomIdentifier)({
    entropyBytes: 4,
    encoding: index_1.encodings.hexadecimal,
  }),
);
console.log(
  (0, index_1.randomIdentifier)({
    entropyBytes: 3,
    encoding: index_1.encodings.decimal,
    trim: 2,
  }),
);
