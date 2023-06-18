import styled from 'styled-components';

interface ContainerProps {
  position?: string;
}

export const Container = styled.div<ContainerProps>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), #FFFFFF;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
