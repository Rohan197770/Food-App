import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  // this reducer is whole big reducer
  //and contain all reducer of all slice
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
