import { createSlice } from "@reduxjs/toolkit";

// Initial state of the user
const initialState = {
  currentUser: null,
};

// Create a slice for user state management
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
