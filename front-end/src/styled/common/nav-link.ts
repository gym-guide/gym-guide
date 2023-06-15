// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { MyGlobalStyle } from '../global';

interface NavLink {
  size?: string;
}

export const NavLink = styled(Link)<NavLink>`
  text-decoration: none;
  color: blue;
  font-size: 15px;
`;
