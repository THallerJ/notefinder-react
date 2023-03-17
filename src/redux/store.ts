import { configureStore } from '@reduxjs/toolkit';
import guitarReducer from './guitarSlice';
import prefsSlice from './prefsSlice';

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
    prefs: prefsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
