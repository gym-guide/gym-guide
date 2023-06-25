import styled from 'styled-components';

interface LinkProps {
  border?: string;
  radius?: string;
  padding?: string;
}

export const NavLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  gap: 5px;
  border: ${(props: LinkProps) => props.border || 'none'};
  border-radius: ${(props: LinkProps) => props.radius || 'none'};
  padding: ${(props: LinkProps) => props.padding || 'none'};

  &:hover {
    text-decoration: underline;
  }
`;
