import { baseConvert } from "./baseConvert";

// encode a base256 array to given alphabet.
// when trim=false, retain leading zero values in place.
export function baseEncode(
  array: Array<number>,
  alphabet: string,
  { trim = true }: { trim?: boolean } = {},
) {
  const converted = baseConvert(array, 256, alphabet.length);
  if (trim) {
    while (converted[0] === 0) {
      converted.shift();
    }
  }
  return converted
    .map((value) => alphabet[value])
    .join("");
}
