import { randomBytes } from "node:crypto";

// Convert a number, expressed as an array of digits, from one base to another.
// Output array is always front zero-padded to max length.
// Adapted from https://github.com/novemberborn/base-convert-int-array
function baseConvert(array: Array<number>, fromBase: number, toBase: number) {
  const result = new Array<number>(Math.ceil(
    array.length * Math.log2(fromBase) / Math.log2(toBase),
  ));

  let offset = result.length;
  let input = array;
  while (input.length > 0) {
    const quotients = [];
    let remainder = 0;

    for (const digit of input) {
      const acc = digit + remainder * fromBase;
      const q = Math.floor(acc / toBase);
      remainder = acc % toBase;

      if (quotients.length > 0 || q > 0) {
        quotients.push(q);
      }
    }

    result[--offset] = remainder;
    input = quotients;
  }

  // zero fill any remaining places
  while (offset > 0) {
    result[--offset] = 0;
  }
  return result;
}

// some common encodings
export const encodings = {
  base62: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  crockfordBase32: "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
  hexadecimal: "0123456789ABCDEF",
  decimal: "0123456789",
};

export function randomIdentifier(
  { entropyBytes = 18, encoding = encodings.base62, prefix = "", trim = 1 }: {
    entropyBytes?: number;
    encoding?: string;
    prefix?: string;
    trim?: number;
  } = {},
) {
  const randomArray = [...randomBytes(entropyBytes)];
  const converted = baseConvert(randomArray, 256, encoding.length).slice(trim);
  return prefix + converted.map((value) => encoding[value]).join("");
}
