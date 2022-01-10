import { configureStore } from '@reduxjs/toolkit';
import { citiesSlice } from './reducers/citiesSlice';

export const store = configureStore({
  reducer: {
    [citiesSlice.name]: citiesSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
