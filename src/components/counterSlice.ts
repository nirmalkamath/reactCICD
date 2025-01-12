import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the counter
const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increase the value
    },
    decrement: (state) => {
      state.value -= 1; // Decrease the value
    },
    reset: (state) => {
      state.value = 0; // Reset the value
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions; // Export actions
export default counterSlice.reducer; // Export reducer
  