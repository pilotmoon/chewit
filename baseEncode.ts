import { baseConvert } from "./baseConvert";

// encode a base256 array to given alphabet
export function baseEncode(array: Array<number>, alphabet: string) {
  return baseConvert(array, 256, alphabet.length)
    .map((value) => alphabet[value])
    .join("");
}
