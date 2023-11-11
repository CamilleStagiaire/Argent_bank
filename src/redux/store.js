import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

/**
 * Configure le store Redux
 * @type {import('@reduxjs/toolkit').Store}
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
