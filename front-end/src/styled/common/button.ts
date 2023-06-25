import { motion } from 'framer-motion';
import styled from 'styled-components';

interface StyledButtonProps {
  size?: string;
  left?: string;
  width?: string;
  height?: string;
  top?: string;
  margin?: string;
  position?: string;
  right?: string;
  bottom?: string;
  bgc?: string;
  border?: string;
  color?: string;
}

export const StyledButton = styled(motion.button)<StyledButtonProps>`
  justify-content: center;
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  margin: ${(props) => props.margin};
  align-items: center;
  margin-left: ${(props) => props.left};
  background-color: ${(props) => props.bgc || 'grey'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '56px'};
  margin-top: ${(props) => props.top};
  min-height: 40px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 8px;
  border: ${(props) => props.border || 'none'};
  color: ${(props) => props.color || '#fff'};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease-in-out;
  
  &:hover {
    transform: scale(0.9);
  }

  &:hover::before {
    width: 100%;
  }

  & > span {
    cursor: pointer;
  }
`;
