export type boolstring = 'true' | 'false';

export function convertToBool(boolString: boolstring): boolean {
  return boolString === 'true';
}

export function convertToBoolString(bool: boolean): boolstring {
  return bool ? 'true' : 'false';
}
