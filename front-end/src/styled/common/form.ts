import styled from 'styled-components';

interface ContainerProps {
  position?: string;
}

export const StyledForm = styled.form<ContainerProps>`
  background-color: white;
  border-radius: 8px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  padding: 32px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;
