import { useReducer } from 'react';
import type { Note } from '../../../types/Note';
import { NoteButtonActionType } from '../types/NoteButtonActionType';

const useNoteButtonData = () => {
  type NoteButtonType = {
    pianoKey: number;
    txt: [string, string?];
    note: Note;
  };
  const initialState: NoteButtonType[] = [
    { pianoKey: 0, txt: ['C'], note: 'C' },
    { pianoKey: 1, txt: ['C#', 'Db'], note: 'C_SHARP' },
    { pianoKey: 2, txt: ['D'], note: 'D' },
    { pianoKey: 3, txt: ['D#', 'Eb'], note: 'D_SHARP' },
    { pianoKey: 4, txt: ['E'], note: 'E' },
    { pianoKey: 5, txt: ['F'], note: 'F' },
    { pianoKey: 6, txt: ['F#', 'Gb'], note: 'F_SHARP' },
    { pianoKey: 7, txt: ['G'], note: 'G' },
    { pianoKey: 8, txt: ['G#', 'Ab'], note: 'G_SHARP' },
    { pianoKey: 9, txt: ['A'], note: 'A' },
    { pianoKey: 10, txt: ['A#', 'Bb'], note: 'A_SHARP' },
    { pianoKey: 11, txt: ['B'], note: 'B' },
  ];

  const reducer = (state: NoteButtonType[], action: NoteButtonActionType) => {
    switch (action) {
      case 'PIANO_SORT':
        return [...state.sort((a, b) => a.pianoKey - b.pianoKey)];
      case 'ALPHA_SORT':
        return [...state.sort((a, b) => a.txt[0].localeCompare(b.txt[0]))];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useNoteButtonData;
