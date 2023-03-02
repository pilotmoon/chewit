import { baseConvert } from "./baseConvert";

// encode a base256 array to given alphabet.
// when trim=true, remove leading zero values.
export function baseEncode(
  array: Array<number>,
  alphabet: string,
  { trim = true }: { trim?: boolean } = {},
) {
  const converted = baseConvert(array, 256, alphabet.length);
  if (trim) while (converted[0] === 0) converted.shift();
  return converted
    .map((value) => alphabet[value])
    .join("");
}

// decode a string in given alphabet to base256 array.
// when trim=true, remove leading zero values.
export function baseDecode(
  string: string,
  alphabet: string,
  { trim = true }: { trim?: boolean } = {},
) {
  const values = string
    .split("")
    .map((char) => alphabet.indexOf(char));
  const converted = baseConvert(values, alphabet.length, 256);
  if (trim) while (converted[0] === 0) converted.shift();
  return converted;
}
