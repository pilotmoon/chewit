import { alphabets as a, baseConvert, baseEncode, randomString } from "./index";

import test from "ava";

test("baseConvert", (t) => {
  t.deepEqual(baseConvert([1, 0, 0], 10, 16), [0, 6, 4]);
});

test("baseEncode", (t) => {
  t.is(baseEncode([0xff, 0xff], a.base10), "65535");
});

test("randomString with no arguments", (t) => {
  const r0 = randomString();
  t.assert(r0.length == 24);
});

test("randomString with length", (t) => {
  const r0 = randomString({ length: 32 });
  t.assert(r0.length == 32);
});

test("randomString base58Flickr", (t) => {
  const r0 = randomString({ length: 5, alphabet: a.base58Flickr });
  t.assert(r0.length == 5);
});

test("randomString base32Crockford", (t) => {
  const r0 = randomString({ length: 5, alphabet: a.base32Crockford });
  t.assert(r0.length == 5);
});

test("randomString base16", (t) => {
  const r0 = randomString({ length: 6, alphabet: a.base16 });
  t.assert(r0.length == 6);
});

test("randomString base10", (t) => {
  const r0 = randomString({ length: 3, alphabet: a.base10 });
  t.assert(r0.length == 3);
});
