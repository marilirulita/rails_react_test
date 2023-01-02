import { createSlice, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

const usernameSlice = createSlice({
  name: "username",
  initialState: { userName: "" },
  reducers: {
    getUser(state, action) {
      const fetchUsers = async () => {
      try {
        const answer = await fetch("/users")
        const data = await answer.json();
        data.forEach(user => {
          if (user.name === action.payload) {
            state.userName = action.payload;
          } else {
            console.log("No user found");
          }
        });
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
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

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    username: usernameSlice.reducer,
    auth: authSlice.reducer,
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
});

export default store;