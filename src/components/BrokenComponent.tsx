import React from "react";

const BrokenComponent: React.FC = () => {
  throw new Error("I am broken!");
  return <div>This will not render</div>;
};

export default BrokenComponent;