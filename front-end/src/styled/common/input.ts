import styled from 'styled-components';
// import { MyGlobalStyle } from '../../styled/global';

interface StyledInputProps {
  mb?: string;
  background?: string;
  border?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  font-family: system-ui;
  height: 40px;
  padding: 10px;
  width: 100%;
  background: ${(props) => props.mb || 'linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), #FFFFFF'};
  border-radius: 8px;
  border: ${(props) => props.border || '2px solid gray'};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: ${(props) => props.mb};

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
