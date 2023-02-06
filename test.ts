import { alphabets as a, baseConvert, baseEncode, randomString } from "./index";
import test from "ava";

test("baseConvert", (t) => {
  t.deepEqual(baseConvert([1, 0, 0], 10, 16), [0, 6, 4]);
  t.deepEqual(baseConvert([65, 65, 65], 256, 58), [0, 21, 53, 15, 31]);
});

test("baseEncode", (t) => {
  t.is(baseEncode([0xff, 0xff], a.base10), "65535");
  t.is(baseEncode([0x0f, 0xff], a.base10), "4095");
  t.is(baseEncode([65, 65, 65], a.base58Satoshi), "NvGY");
  t.is(baseEncode([65, 65, 65], a.base58Flickr), "nVgx");
  t.is(baseEncode([65, 65, 65], a.base32Crockford), "42GA1");
});

test("baseEncode trimmed", (t) => {
  t.is(baseEncode([0x0f, 0xff], a.base10, { trim: false }), "04095");
  t.is(baseEncode([65, 65, 65], a.base58Flickr, { trim: false }), "1nVgx");
  t.is(baseEncode([65, 65, 65], a.base32Crockford, { trim: false }), "42GA1");
});

test("randomString with no arguments", (t) => {
  const r0 = randomString();
  t.log(r0);
  t.assert(r0.length == 24);
});

test("randomString with length", (t) => {
  const r0 = randomString({ length: 32 });
  t.log(r0);
  t.assert(r0.length == 32);
});

test("randomString base58Flickr", (t) => {
  const r0 = randomString({ length: 5, alphabet: a.base58Flickr });
  t.log(r0);
  t.assert(r0.length == 5);
});

test("randomString base32Crockford", (t) => {
  const r0 = randomString({ length: 5, alphabet: a.base32Crockford });
  t.log(r0);
  t.assert(r0.length == 5);
});

test("randomString base16", (t) => {
  const r0 = randomString({ length: 6, alphabet: a.base16 });
  t.log(r0);
  t.assert(r0.length == 6);
});

test("randomString base10", (t) => {
  const r0 = randomString({ length: 3, alphabet: a.base10 });
  t.log(r0);
  t.assert(r0.length == 3);
});

test("randomString custom rng", (t) => {
  function rng(size: number) { // non-random
    const result = new Array(size);
    for (let i = 0; i <= size; i++) {
      result[i] = i;
    }
    return result;
  }
  const r0 = randomString({ length: 6, alphabet: a.base10, rng: rng });
  t.log(r0);
  t.is(r0, "066051");
});
