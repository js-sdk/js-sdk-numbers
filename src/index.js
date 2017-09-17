export function isEven(n) {
  return n % 2 == 0;
}

export function isOdd(n) {
  return n % 2 != 0;
}

export const toChar = String.fromCharCode;

export const fromChar = c => c.codePointAt(0);
