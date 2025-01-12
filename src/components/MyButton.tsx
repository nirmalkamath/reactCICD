// MyButton.tsx
import React from 'react';

interface MyButtonProps {
  label: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default MyButton;
