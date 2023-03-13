import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

const store = configureStore({
  reducer: {
    counterReducer
  },
});

export default store;
