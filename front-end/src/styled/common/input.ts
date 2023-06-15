import styled from 'styled-components';
// import { MyGlobalStyle } from '../../styled/global';

export const StyledInput = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
