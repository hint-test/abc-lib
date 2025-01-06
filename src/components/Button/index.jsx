export * from './types';

export const Button = ({ label, onClick }) => {
  console.log('I am a Button AAA');
  return <button onClick={onClick}>{label}</button>;
};
