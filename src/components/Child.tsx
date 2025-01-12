import React from "react";

interface ChildProps {
  onIncrement: (incrementValue: number, source: string) => void; // Function to update count with source
}

const Child: React.FC<ChildProps> = ({ onIncrement }) => {
  console.log("Child re-rendered!");

  // Use the `onIncrement` function to increment by 2
  const handleIncrementByTwo = () => {
    onIncrement(2, "Child");
  };

  return (
    <div>
      <button onClick={handleIncrementByTwo}>Increment by 2 (Child)</button>
    </div>
  );
};



export default Child;