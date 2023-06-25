import styled from 'styled-components';
import icon from '../../assets/icons/my-list.svg';

interface StyledImageProps {
  src?: string;
  width?: string;
  height?: string;
}

const StyledIcon = styled.img.attrs<StyledImageProps>(props => ({
  src: icon,
}))`
  width: 15px;
  height: 15px;
`;

export default StyledIcon;
