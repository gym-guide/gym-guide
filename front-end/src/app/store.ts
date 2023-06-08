import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from '../features/exercises/exerciseReducer';
export const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
