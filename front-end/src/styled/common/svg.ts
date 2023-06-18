import styled from 'styled-components';

interface SVGProps {
  width?: string;
  height?: string;
}

export const SVG = styled.svg<SVGProps>`
  width: ${(props: SVGProps) => props.width};
  height: ${(props: SVGProps) => props.height};
  src: '../../../assets/icons/next-998-svgrepo-com.svg';
  background-image: url('../../assets/icons/next-998-svgrepo-com.svg');
`;
