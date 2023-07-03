import styled from 'styled-components';
import { Exercise } from '../types/Exercise';
import testImg from '../assets/mock/Hulf Crunch.png';
// import testGif from '../assets/mock/Hulf Crunch.gif';
import { useState } from 'react';
import { FlexBox } from '../styled/common/flex-box';
import { Typography } from '../styled/common/typography';
import { StyledButton } from '../styled/common/button';
import { Link } from 'react-router-dom';

interface Props {
  exercise: Exercise,
}

export const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const [isAddedToFavorite, setIsAddedTofavorite] = useState(false);
  const { id, title, category, sub_category } = exercise;

  return (
    <CardContainer direction='column'>
      <FlexBox justifyContent='space-between' gap='8px'>
        <Typography color='black' weight='bold' m='0' size='20px'>
          {`${title}`}
        </Typography>

        <FavoriteButton
          isActive={isAddedToFavorite}
          onClick={() => setIsAddedTofavorite(prev => !prev)}
        />
      </FlexBox>

      <CardImage src={testImg} />
      <FlexBox justifyContent='space-between'>
        <Typography color='black' weight='bold' m='0' size='14px'>
          {'Category:'}
        </Typography>

        <Typography color='black' m='0' size='14px'>
          {`${category}(${sub_category})`}
        </Typography>
      </FlexBox>

      <Link to={`/${id}`}>
        <StyledButton>
          Details
        </StyledButton>
      </Link>
    </CardContainer>
  );
};

interface ContainerProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridGap?: string;
  height?: string;
}

const CardContainer = styled.div<ContainerProps>`
  display: flex;
  height: ${(props: ContainerProps) => props.height || '100%'};
  flex-direction: ${(props: ContainerProps) => props.direction || 'row'};
  justify-content: ${(props: ContainerProps) => props.justifyContent || 'stretch'};
  align-items: ${(props: ContainerProps) => props.alignItems || 'stretch'};
  max-width: 290px;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  max-height: 200px;
  object-fit: contain;
  border-radius: 4px;
  margin-bottom: 16px;
`;

interface FavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean,
  onClick?: () => void,
}

const FavoriteButton = styled.button<FavButtonProps>`
  width: 24px;
  height: 24px;
  background-image: ${(props: FavButtonProps) => props.isActive ? 'url(/src/assets/icons/unfavorite.svg)' : 'url(/src/assets/icons/favorite.svg)'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  background-color: transparent;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
