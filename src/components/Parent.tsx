import React, { useState, useCallback } from "react";
import Child from './Child.tsx'

const Parent: React.FC = () => {
  const [count, setCount] = useState<number>(0); // State to track the count

  // Function to handle increments (accepts the increment value)
const increment = useCallback((incrementValue: number, source: string) => {
    console.log(`Increment triggered from: ${source}`);
    setCount((prev) => prev + incrementValue);
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      {/* Parent's button increments by 1 */}
      <button onClick={() => increment(1, "Parent")}>Increment by 1 (Parent)</button>
      {/* Pass the increment function to the child */}
      <Child onIncrement={increment} />
    </div>
  );
};

export default Parent;