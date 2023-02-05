import { alphabets as a, baseConvert, baseEncode, randomString } from "./index";
console.log(
  baseConvert([1, 0, 0], 10, 16),
);
console.log(
  baseEncode([0xff, 0xff], a.base10),
);
console.log(
  randomString(),
);
console.log(
  randomString({ length: 32 }),
);
console.log(
  randomString({ length: 5, alphabet: a.base58Flickr }),
);
console.log(
  randomString({ length: 6, alphabet: a.base32Crockford }),
);
console.log(
  randomString({ length: 6, alphabet: a.base16 }),
);
console.log(
  randomString({ length: 3, alphabet: a.base10 }),
);
