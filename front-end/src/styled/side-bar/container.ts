import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  grid-area: Sidebar;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  padding: 60px 40px;
  background-color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  gap: 10px;
`;
