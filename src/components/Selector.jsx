import React from 'react';

const Selector = ({ label, onClick }) => {
  console.log('I am a Selector');
  return <select onClick={onClick}>{label}</select>;
};

export default Selector;

