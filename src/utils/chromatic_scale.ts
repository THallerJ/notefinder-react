import type { Note } from '../types/Note';

const notes: Note[] = [
  'A',
  'A_SHARP',
  'B',
  'C',
  'C_SHARP',
  'D',
  'D_SHARP',
  'E',
  'F',
  'F_SHARP',
  'G',
  'G_SHARP',
];

export const iterateScale = (start: Note, intervals: number): Note => {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] === start) {
      return notes[(i + intervals) % notes.length];
    }
  }

  throw new Error('This code is unreachable');
};
