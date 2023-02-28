import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GuitarStringEnum, NoteEnum, guitarStringToNote } from "../utils/enum";
import { iterateScale } from "../utils/chromaticScale";

const getRandomInt = (range?: number): number =>
	Math.floor(Math.random() * (range ? range : 6));

const getRandomFret = (): number => getRandomInt(12) + 1;

const getRandomGtrStr = (range?: number): GuitarStringEnum => {
	const objKeys = Object.values(GuitarStringEnum);
	return objKeys[getRandomInt(range)] as GuitarStringEnum;
};

type guitarState = {
	guitarCoord: { fret: number; str: GuitarStringEnum };
	allowedStrings: GuitarStringEnum[];
	correctNote?: NoteEnum;
	checkAnswerFlag: boolean;
	isSolved: boolean;
};

const initialState: guitarState = {
	allowedStrings: [
		GuitarStringEnum.LOW_E,
		GuitarStringEnum.A,
		GuitarStringEnum.D,
		GuitarStringEnum.G,
		GuitarStringEnum.B,
		GuitarStringEnum.HIGH_E,
	],
	guitarCoord: { fret: getRandomFret(), str: getRandomGtrStr() },
	checkAnswerFlag: false,
	isSolved: false,
};

initialState.correctNote = iterateScale(
	guitarStringToNote(initialState.guitarCoord.str),
	initialState.guitarCoord.fret
);

export const guitarSlice = createSlice({
	name: "guitar",
	initialState,
	reducers: {
		updateNote: (state) => {
			let fretNum: number;
			let str: GuitarStringEnum;

			do {
				fretNum = getRandomFret();
				str = getRandomGtrStr(state.allowedStrings.length);
			} while (
				fretNum === state.guitarCoord.fret &&
				str === state.guitarCoord.str
			);

			state.isSolved = false;
			state.correctNote = iterateScale(guitarStringToNote(str), fretNum);
			state.guitarCoord = { fret: fretNum, str: str };
		},
		checkAnswer: (state, action: PayloadAction<NoteEnum>) => {
			if (action.payload === state.correctNote) state.isSolved = true;
			state.checkAnswerFlag = !state.checkAnswerFlag;
		},
		filterStrings: (state, action: PayloadAction<GuitarStringEnum>) => {
			const index = state.allowedStrings.indexOf(action.payload);

			if (index !== -1) {
				// remove GuitarString from the array
				state.allowedStrings = [
					...state.allowedStrings.slice(0, index),
					...state.allowedStrings.slice(index + 1),
				];
			} else {
				// add GuitarString to the array
				state.allowedStrings = [...state.allowedStrings, action.payload];
			}
		},
	},
});

export const { updateNote, checkAnswer, filterStrings } = guitarSlice.actions;
export default guitarSlice.reducer;
