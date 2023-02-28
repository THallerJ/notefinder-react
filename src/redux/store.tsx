import { configureStore } from "@reduxjs/toolkit";
import guitarReducer from "./guitarSlice";
// TODO: create userPrefsSlice for tracking night mode, fretboard color, sharps/flats
export const store = configureStore({
	reducer: {
		guitar: guitarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
