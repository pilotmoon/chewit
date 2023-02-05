// some common base-n encoding alphabets
export const alphabets = {
  base62: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  base58Flickr: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", // missing 0, l, I, O
  base58Satoshi: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", // missing 0, I, O, l
  base32Crockford: "0123456789ABCDEFGHJKMNPQRSTVWXYZ", // missing I, L, O, U
  base16: "0123456789ABCDEF",
  base10: "0123456789",
};
