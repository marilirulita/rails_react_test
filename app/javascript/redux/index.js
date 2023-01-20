import { createSlice, configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

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
    },
    showSearch(state) {
      state.showSearch = !state.showSearch;
    }
  },
});

const alertSlice = createSlice({
  name: "alert",
  initialState: { alert: null },
  reducers: {
    showNotification(state, action) {
      state.alert = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      }
    },
  },
});

export const fetchUsers = (username) => {
  return (dispatch) => {
    dispatch(alertActions.showNotification({
      message: "Sending Request", 
      type: "warning", 
      open: true}));
    try {
      fetch('/users')
        .then((res) => res.json())
        .then((data) => {
          data.forEach(user => {
            if (user.name === username) {
              console.log("User found");
              dispatch(alertActions.showNotification({
                message: "Request succesfull", 
                type: "success", 
                open: true}));
              dispatch(usernameActions.getUser(username));
              dispatch(authActions.login());
            } else {
              dispatch(alertActions.showNotification({
                message: "No user found", 
                type: "info", 
                open: true}));
            }
          });
        }
      );} catch (err) {
          dispatch(alertActions.showNotification({
            message: err, 
            type: "error", 
            open: true}));
        }
  };
};

export const usernameActions = usernameSlice.actions;
export const authActions = authSlice.actions;
export const searchActions = searchSlice.actions;
export const alertActions = alertSlice.actions;

const store = configureStore({
  reducer: {
    username: usernameSlice.reducer,
    auth: authSlice.reducer,
    search: searchSlice.reducer,
    alert: alertSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
});

export default store;