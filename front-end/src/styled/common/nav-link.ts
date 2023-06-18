// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { MyGlobalStyle } from '../global';

interface NavLink {
  size?: string;
}

export const NavLink = styled(Link)<NavLink>`
position: relative;
color: black;
font-size: 16;
text-decoration: none;

&::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 1.5px;
  background-color: black;
}

&:hover::before {
  width: 100%;
}

&::before {
  transition: width 0.30s;
}
`;
