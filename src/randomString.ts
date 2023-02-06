import { randomBytes } from "node:crypto";
import { alphabets } from "./alphabets";
import { baseEncode } from "./baseEncode";

// default RNG, for node
function nodeRng(size: number) {
  return [...randomBytes(size)];
}

// generate a random string of the given length using the given alphabet
export function randomString(
  { length = 24, alphabet = alphabets.base62, rng = nodeRng }: {
    length?: number;
    alphabet?: string;
    rng?: (size: number) => Array<number>;
  } = {},
) {
  // number of random bytes needed meet the required output length
  const size = Math.ceil(length * Math.log2(alphabet.length) / Math.log2(256));
  // encode random bytes in the output alphabet
  const encoded = baseEncode(rng(size), alphabet, { trim: false });
  // trim characters off the front to meet required length
  return encoded.slice(encoded.length - length);
}
