import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Typography {
  size?: string;
  cursor?: string;
  weight?: string;
}

export const Typography = styled(motion.span)<Typography>`
  font-family: system-ui;
  font-style: normal;
  font-weight: ${(props: Typography) => props.weight || '500'};
  font-size: ${(props: Typography) => props.size || '14px'};
  cursor: ${(props: Typography) => props.cursor || 'auto'};
`;
