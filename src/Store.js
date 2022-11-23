import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/User";

export const store = configureStore({
  reducer : {
    user: userReducer,
  },
});
