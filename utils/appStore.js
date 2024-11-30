import { configureStore } from "@reduxjs/toolkit";
import blogCartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: blogCartReducer,
  }
});

export default appStore;