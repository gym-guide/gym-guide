import styled from 'styled-components';
// import { MyGlobalStyle } from '../../styled/global';

export const StyledInput = styled.input`
  font-family: system-ui;
  height: 40px;
  padding: 10px;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), #FFFFFF;
  border-radius: 8px;
  border: 2px solid gray;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
