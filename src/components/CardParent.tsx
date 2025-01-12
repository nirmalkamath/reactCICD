// Parent Component
import React from "react";
import Card from "./Card"; // Import the child component

const CardParent: React.FC = () => {
  return (
    <div>
      <h1>Example of Parent Passing Props to Child</h1>

      {/* Passing children dynamically */}
      <Card>
        <h2>This is a title</h2>
        <p>This content was passed from the parent using the children prop!</p>
      </Card>

      {/* Another example with different children */}
      <Card>
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
          style={{ width: "100px", height: "100px" }}
        />
        <p>This card displays an image!</p>
      </Card>
    </div>
  );
};

export default CardParent;
