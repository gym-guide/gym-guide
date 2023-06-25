import StyledIcon from '../../../styled/common/icon';
import { HeaderContainer } from '../../../styled/header/container';
import { Logo } from '../../../styled/header/logo';
import { NavLinks } from '../../../styled/header/nav-links';
import { NavLink } from '../../../styled/header/nav-link';

export const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink href="/#/my-list">
          <StyledIcon src='../../assets/icons/my-list.svg' />
          My List
        </NavLink>
        <NavLink href="/#/add-new">
          <StyledIcon src='../../assets/icons/add.svg' />
          Add New
        </NavLink>
        <NavLink
          href="/#/login"
          border='2px solid black'
          radius='8px'
          padding='10px 35px'
        >
          Log Out
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
