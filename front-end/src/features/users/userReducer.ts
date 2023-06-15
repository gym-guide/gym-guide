import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { initialStateForUser } from '../../types/User';

const initialState: initialStateForUser = {
  userData: '',
  loading: false,
  success: false,
  message: '',
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.message = '';
      state.error = false;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.userData = action.payload;
    },
  },
});

export const { actions } = userSlice;
export const user = (state: RootState) => state.user.userData;

export default userSlice.reducer;
