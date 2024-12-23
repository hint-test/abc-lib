import React from 'react';

const Selector = ({ label, onClick }) => {
  console.log('I am a Selector BBB');
  return <select onClick={onClick}>{label}</select>;
};

export default Selector;

