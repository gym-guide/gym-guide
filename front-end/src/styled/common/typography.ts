import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Typography {
  size?: string;
  cursor?: string;
  weight?: string;
  color?: string;
  mb?: string;
}

export const Typography = styled(motion.span)<Typography>`
  font-family: system-ui;
  font-style: normal;
  margin: 0 auto;
  margin-bottom: ${(props: Typography) => props.mb || 'white'};
  color: ${(props: Typography) => props.color || 'white'};
  font-weight: ${(props: Typography) => props.weight || '500'};
  font-size: ${(props: Typography) => props.size || '14px'};
  cursor: ${(props: Typography) => props.cursor || 'auto'};
`;
