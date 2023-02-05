import { randomBytes } from "node:crypto";
import { alphabets } from "./alphabets";
import { baseEncode } from "./baseEncode";

// generate a random string of the given length using the given alphabet
export function randomString(
  { length = 24, alphabet = alphabets.base62 }: {
    length?: number;
    alphabet?: string;
  } = {},
) {
  // number of random bytes needed meet the required output length
  const n = Math.ceil(length * Math.log2(alphabet.length) / Math.log2(256));
  // encode random bytes in the output alphabet
  const encoded = baseEncode([...randomBytes(n)], alphabet, { trim: false });
  // trim characters off the front to meet required length
  return encoded.slice(encoded.length - length);
}
