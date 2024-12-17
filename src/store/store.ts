import { configureStore } from '@reduxjs/toolkit';
import globalUiReducer from './globalUISlice.ts';

const store = configureStore({
  reducer: {
    globalUI: globalUiReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
