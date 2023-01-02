import { createSlice, configureStore } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "userName",
  initialState: { userName: "Mar" },
  reducers: {
    getUser(state, action) {
      state.userName = "Laura";
    },
  },
});

export const usernameActions = usernameSlice.actions;

const store = configureStore({
  reducer: usernameSlice.reducer,
});

export default store;