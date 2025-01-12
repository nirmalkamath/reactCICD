import React from 'react';
import useBearStore from '../zustand/store';

const BearCounter: React.FC = () => {
  const { bears, increaseBears, decreaseBears } = useBearStore();

  return (
    <div>
      <h1>Bears: {bears}</h1>
      <button onClick={() => increaseBears(1)}>Increase Bears</button>
      <button onClick={() => decreaseBears(1)}>Decrease Bears</button>
    </div>
  );
};

export default BearCounter;
