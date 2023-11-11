import { createSlice } from '@reduxjs/toolkit';

// Slice Redux pour gérer l'état de l'utilisateur
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    username: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    /**
     * Action pour connecter l'utilisateur
     * @param {Object} state
     * @param {Object} action
     */
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    /**
     * Action pour déconnecter l'utilisateur.
     * @param {Object} state - L'état actuel de l'utilisateur
     */
    signOut: (state) => {
      state.isAuthenticated = false;
      state.username = null;
    },
     /**
     * Action pour définir le prénom de l'utilisateur
     * @param {Object} state 
     * @param {Object} action
     */
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    /**
     * Action pour définir le nom de l'utilisateur
     * @param {Object} state 
     * @param {Object} action
     */
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

// Les actions générées à partir des reducers
export const { signIn, signOut, setFirstName, setLastName  } = userSlice.actions;

// Le reducer
export default userSlice.reducer;
