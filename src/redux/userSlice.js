import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    username: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.username = null;
    },
  },
});

// Les actions générées à partir des reducers.
export const { signIn, signOut } = userSlice.actions;

// Le reducer
export default userSlice.reducer;
