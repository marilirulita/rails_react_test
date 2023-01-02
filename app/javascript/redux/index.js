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

const searchSlice = createSlice({
  name: "search",
  initialState: { 
    itemsList: [],
    totalQuantity: 0,
    showSearch: false,
   },
  reducers: {
    getSearch(state, action) {
      state.search = action.payload;
    },
    addToSearch(state, action) {
      const existingItem = state.itemsList.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.price;
      }
      else {  
        state.itemsList.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
          name: action.payload.name,
        });

        state.totalQuantity++;
      }
    }
  },
});


export const usernameActions = usernameSlice.actions;
export const authActions = authSlice.actions;
export const searchActions = searchSlice.actions;

const store = configureStore({
  reducer: {
    username: usernameSlice.reducer,
    auth: authSlice.reducer,
    search: searchSlice.reducer,
  } 
});

export default store;