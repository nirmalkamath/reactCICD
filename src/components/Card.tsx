// Child Component
import React from "react";

interface CardProps {
  children: React.ReactNode; // Allowing dynamic JSX as content
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "16px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

export default Card;
