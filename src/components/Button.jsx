import React from 'react';

const Button = ({ label, onClick }) => {
  console.log('I am a Button AAA');
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

