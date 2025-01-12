import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from "./usersSlice"; // Your reducer
import rootSaga from "./sagas"; // Your sagas

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
