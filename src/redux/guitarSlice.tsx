import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GuitarString } from "../Enum";

const getRandomInt = (range: number): number => {
	return Math.floor(Math.random() * range) + 1;
};

const getRandomGtrStr = (range: number): GuitarString => {
	const objKeys = Object.values(GuitarString);
	return objKeys[range] as GuitarString;
};

type guitarState = {
	currentNote: { fret: number; str: GuitarString };
	allowedStrings: GuitarString[];
};

const initialState: guitarState = {
	allowedStrings: [
		GuitarString.LOW_E,
		GuitarString.A,
		GuitarString.D,
		GuitarString.G,
		GuitarString.B,
		GuitarString.HIGH_E,
	],
	currentNote: { fret: getRandomInt(12), str: getRandomGtrStr(6) },
};

export const guitarSlice = createSlice({
	name: "guitar",
	initialState,
	reducers: {
		updateNote: (state) => {
			let fretNum: number;
			let str: GuitarString;

			do {
				fretNum = getRandomInt(12);
				str = getRandomGtrStr(state.allowedStrings.length);
			} while (
				fretNum === state.currentNote.fret &&
				str === state.currentNote.str
			);

			state.currentNote = { fret: fretNum, str: str };
		},
		filterStrings: (state, action: PayloadAction<GuitarString>) => {
			const index = state.allowedStrings.indexOf(action.payload);

			if (index !== -1) {
				state.allowedStrings = [
					...state.allowedStrings.slice(0, index),
					...state.allowedStrings.slice(index + 1),
				];
			} else {
				state.allowedStrings = [...state.allowedStrings, action.payload];
			}
		},
	},
});

export const {} = guitarSlice.actions;
export default guitarSlice.reducer;
