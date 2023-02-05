import { encodings, randomIdentifier } from "./index";
console.log(
  randomIdentifier(),
);
console.log(
  randomIdentifier({ prefix: "apikey_", entropyBytes: 24 }),
);
console.log(
  randomIdentifier({
    prefix: "1",
    entropyBytes: 4,
    encoding: encodings.flickrBase58,
  }),
);
console.log(
  randomIdentifier({ entropyBytes: 4, encoding: encodings.crockfordBase32 }),
);
console.log(
  randomIdentifier({ entropyBytes: 4, encoding: encodings.hexadecimal }),
);
console.log(
  randomIdentifier({ entropyBytes: 3, encoding: encodings.decimal, trim: 2 }),
);
