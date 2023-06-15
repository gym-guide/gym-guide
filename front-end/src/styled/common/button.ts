import { motion } from 'framer-motion';
import styled from 'styled-components';
// import { MyGlobalStyle } from '../global';

export const StyledButton = styled(motion.button)`
  background-color: grey;
  width: 100%;
  min-height: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: #fff;

  & > span {
    cursor: pointer;
  }
`;
