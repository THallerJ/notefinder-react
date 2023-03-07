import type { GuitarString } from './GuitarString';

export type Note =
  | 'A'
  | 'A_SHARP'
  | 'B'
  | 'C'
  | 'C_SHARP'
  | 'D'
  | 'D_SHARP'
  | 'E'
  | 'F'
  | 'F_SHARP'
  | 'G'
  | 'G_SHARP';

export const guitarStringToNote = (gtrStr: GuitarString): Note => {
  if (gtrStr === 'HIGH_E' || gtrStr === 'LOW_E') return 'E';
  return gtrStr as Note;
};
