import { createSlice } from '@reduxjs/toolkit';
import { initialStateForExercises } from '../../types/Exercise';

const initialState: initialStateForExercises = {
  exercisesData: [],
  exerciseData: [],
  loading: false,
  success: false,
  message: '',
  error: false,
};

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.message = '';
      state.error = false;
    },
  },

  extraReducers: {

  },
});

export const { actions } = exerciseSlice;

export default exerciseSlice.reducer;
