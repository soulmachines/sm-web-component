export type stringbool = 'true' | 'false';

export function convertToBool(stringBool: stringbool) {
  return stringBool === 'true';
}
