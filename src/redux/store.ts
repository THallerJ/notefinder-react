import { configureStore } from '@reduxjs/toolkit';
import guitarReducer from './guitarSlice';

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
