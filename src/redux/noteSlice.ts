import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iterateScale } from '../utils/chromatic_scale';
import { removeElemByIndex } from '../utils/array_utils';
import type { Note } from '../types/Note';
import type { GuitarString } from '../types/GuitarString';
import { guitarStringToNote } from '../types/Note';

const getRandomInt = (range: number): number =>
  Math.floor(Math.random() * range);

const getRandomFret = (): number => getRandomInt(12) + 1;

const getRandomGtrStr = (array?: GuitarString[]): GuitarString => {
  const temp = array || ['LOW_E', 'A', 'D', 'G', 'B', 'HIGH_E'];
  return temp[getRandomInt(temp.length)] as GuitarString;
};

type NoteSliceState = {
  guitarCoord: { fret: number; str: GuitarString };
  allowedStrings: GuitarString[];
  correctNote?: Note;
  checkAnswerFlag: boolean;
  isSolved: boolean;
};

const initialState: NoteSliceState = {
  allowedStrings: ['LOW_E', 'A', 'D', 'G', 'B', 'HIGH_E'],
  guitarCoord: { fret: getRandomFret(), str: getRandomGtrStr() },
  checkAnswerFlag: false,
  isSolved: false,
};

initialState.correctNote = iterateScale(
  guitarStringToNote(initialState.guitarCoord.str),
  initialState.guitarCoord.fret
);

export const noteSlice = createSlice({
  name: 'guitar',
  initialState,
  reducers: {
    updateNote: (state) => {
      let fretNum: number;
      let str: GuitarString;

      do {
        fretNum = getRandomFret();
        str = getRandomGtrStr(state.allowedStrings);
      } while (
        fretNum === state.guitarCoord.fret &&
        str === state.guitarCoord.str
      );

      state.isSolved = false;
      state.correctNote = iterateScale(guitarStringToNote(str), fretNum);
      state.guitarCoord = { fret: fretNum, str };
    },
    checkAnswer: (state, action: PayloadAction<Note>) => {
      if (action.payload === state.correctNote) state.isSolved = true;
      state.checkAnswerFlag = !state.checkAnswerFlag;
    },
    filterStrings: (state, action: PayloadAction<GuitarString>) => {
      const gtrStr = action.payload;
      const index = state.allowedStrings.indexOf(gtrStr);

      if (index !== -1 && state.allowedStrings.length > 1) {
        // remove GuitarSting from the array
        state.allowedStrings = removeElemByIndex(state.allowedStrings, index);
      } else {
        // add GuitarString to the array
        state.allowedStrings = [...state.allowedStrings, action.payload];
      }
    },
  },
});

export const { updateNote, checkAnswer, filterStrings } = noteSlice.actions;
export default noteSlice.reducer;
