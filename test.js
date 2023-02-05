"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const ava_1 = require("ava");
(0, ava_1.default)("baseConvert", (t) => {
  t.deepEqual((0, index_1.baseConvert)([1, 0, 0], 10, 16), [0, 6, 4]);
  t.deepEqual((0, index_1.baseConvert)([65, 65, 65], 256, 58), [
    0,
    21,
    53,
    15,
    31,
  ]);
});
(0, ava_1.default)("baseEncode", (t) => {
  t.is(
    (0, index_1.baseEncode)([0xff, 0xff], index_1.alphabets.base10),
    "65535",
  );
  t.is((0, index_1.baseEncode)([0x0f, 0xff], index_1.alphabets.base10), "4095");
  t.is(
    (0, index_1.baseEncode)([65, 65, 65], index_1.alphabets.base58Satoshi),
    "NvGY",
  );
  t.is(
    (0, index_1.baseEncode)([65, 65, 65], index_1.alphabets.base58Flickr),
    "nVgx",
  );
  t.is(
    (0, index_1.baseEncode)([65, 65, 65], index_1.alphabets.base32Crockford),
    "42GA1",
  );
});
(0, ava_1.default)("baseEncode trimmed", (t) => {
  t.is(
    (0, index_1.baseEncode)([0x0f, 0xff], index_1.alphabets.base10, {
      trim: false,
    }),
    "04095",
  );
  t.is(
    (0, index_1.baseEncode)([65, 65, 65], index_1.alphabets.base58Flickr, {
      trim: false,
    }),
    "1nVgx",
  );
  t.is(
    (0, index_1.baseEncode)([65, 65, 65], index_1.alphabets.base32Crockford, {
      trim: false,
    }),
    "42GA1",
  );
});
(0, ava_1.default)("randomString with no arguments", (t) => {
  const r0 = (0, index_1.randomString)();
  t.assert(r0.length == 24);
});
(0, ava_1.default)("randomString with length", (t) => {
  const r0 = (0, index_1.randomString)({ length: 32 });
  t.assert(r0.length == 32);
});
(0, ava_1.default)("randomString base58Flickr", (t) => {
  const r0 = (0, index_1.randomString)({
    length: 5,
    alphabet: index_1.alphabets.base58Flickr,
  });
  t.assert(r0.length == 5);
});
(0, ava_1.default)("randomString base32Crockford", (t) => {
  const r0 = (0, index_1.randomString)({
    length: 5,
    alphabet: index_1.alphabets.base32Crockford,
  });
  t.assert(r0.length == 5);
});
(0, ava_1.default)("randomString base16", (t) => {
  const r0 = (0, index_1.randomString)({
    length: 6,
    alphabet: index_1.alphabets.base16,
  });
  t.assert(r0.length == 6);
});
(0, ava_1.default)("randomString base10", (t) => {
  const r0 = (0, index_1.randomString)({
    length: 3,
    alphabet: index_1.alphabets.base10,
  });
  t.assert(r0.length == 3);
});
