import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../types/Note';
import { Accidental } from '../types/Accidental';

type NoteButtonType = {
  pianoKey: number;
  txt: [string, string?];
  note: Note;
};

type PrefsSliceState = {
  notes: NoteButtonType[];
  accidental: Accidental;
  isLeftHanded: boolean
};

const notes: NoteButtonType[] = [
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

const initialState: PrefsSliceState = {
  notes: notes,
  accidental: 'BOTH',
  isLeftHanded: false
};

export const prefsSlice = createSlice({
  name: 'prefs',
  initialState,
  reducers: {
    pianoSort: (state) => {
      state.notes = [...state.notes.sort((a, b) => a.pianoKey - b.pianoKey)];
    },
    alphaSort: (state) => {
      state.notes = [
        ...state.notes.sort((a, b) => a.txt[0].localeCompare(b.txt[0])),
      ];
    },
    setAccidendtal: (state, action: PayloadAction<Accidental>) => {
      state.accidental = action.payload;
    },
    setLeftHanded: (state, action: PayloadAction<boolean>) => {
      state.isLeftHanded = action.payload
    },
    toggleLeftHanded: (state) => {
      state.isLeftHanded = !state.isLeftHanded
    }
  },
});

export const { pianoSort, alphaSort, setAccidendtal, setLeftHanded, toggleLeftHanded } = prefsSlice.actions;
export default prefsSlice.reducer;
