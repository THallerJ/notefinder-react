import type { Note } from '../../../types/Note';

export type NoteButtonData = {
  pianoKey: number;
  txt: [string, string?];
  note: Note;
};
