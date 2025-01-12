import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import the counter reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Register the counter reducer
  },
});

export type RootState = ReturnType<typeof store.getState>; // For state typing
export type AppDispatch = typeof store.dispatch; // For dispatch typing
export default store; // Export the store
