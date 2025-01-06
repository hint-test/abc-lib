import {ButtonWrapper} from "./index.styles";

export * from './types';

export const Button = ({ label, onClick }) => {
  console.log('I am a Button AAA');
  return <ButtonWrapper>
      <button onClick={onClick}>{label}</button>
  </ButtonWrapper>;
};
