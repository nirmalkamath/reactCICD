import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // For Redux hooks
import { increment, decrement, reset } from './counterSlice'; // Import actions
import { RootState } from './store'; // Import the state type

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value); // Access state
  const dispatch = useDispatch(); // To dispatch actions

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Display the counter */}
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Dispatch increment */}
      <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Dispatch decrement */}
      <button onClick={() => dispatch(reset())}>Reset</button> {/* Dispatch reset */}
    </div>
  );
};

export default Counter;
