import { createSlice, configureStore } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "username",
  initialState: { userName: "" },
  reducers: {
    getUser(state, action) {
      state.userName = action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const usernameActions = usernameSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: {
    username: usernameSlice.reducer,
    auth: authSlice.reducer,
  } 
});

export default store;