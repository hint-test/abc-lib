import React from 'react';

export const Selector = ({ label, onClick }) => {
  console.log('I am a Selector BBB');
  return <select onClick={onClick}>{label}</select>;
};
