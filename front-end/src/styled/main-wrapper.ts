import styled from 'styled-components';

export const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 0px;
  grid-template-areas:
    "Header Header Header Header Header Header Header Header Header"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
    "Sidebar Sidebar Exercises Exercises Exercises Exercises Exercises Exercises Exercises"
`;
