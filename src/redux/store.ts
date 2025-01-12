import { configureStore } from "@reduxjs/toolkit";
import * as thunk from "redux-thunk";
import { RootState, AppDispatch } from './redux/store';
import usersReducer from "./usersSlice";

console.log("Redux Thunk Middleware:", thunk); // Add this for debugging

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk}),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
