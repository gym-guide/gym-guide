import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #000000;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:checked {
    background-color: #ffffff;
    border-color: #000000;
    transition: 0.3s;

  }

  &:checked::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-color: #000000;
    border-radius: 50%;
    margin: 3px;
    transition: 0.3s;

  }
`;
