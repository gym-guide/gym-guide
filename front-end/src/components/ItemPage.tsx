import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Exercise } from '../types/Exercise';
import { ItemPageWrapper } from '../styled/item-page/wrapper';
import { Typography } from '../styled/common/typography';
import styled from 'styled-components';
import { FlexBox } from '../styled/common/flex-box';
// import testImage from '../assets/mock/Hulf Crunch.png';
import testGif from '../assets/mock/Hulf Crunch.gif';

const testExercise = {
  id: 0,
  title: 'Hulf Crunch',
  // eslint-disable-next-line max-len
  description: 'The "Half Crunch" exercise is a core strengthening exercise that targets the abdominal muscles. It is a modified version of the traditional crunch exercise, focusing on the upper portion of the abdominal muscles.',
  category: 'FRONT',
  sub_category: 'ABS',
  image_path: 'back-end/src/main/resources/images/front/abs/Hulf Crunch.png',
  gif_path: 'back-end/src/main/resources/gifs/front/abs/Hulf Crunch.gif',
};

export const ItemPage: React.FC = () => {
  const { id } = useParams();
  const [currentExercise] = useState<Exercise | null>(testExercise);

  // useEffect(() => {
  //   const exercise = loadExercise(id);
  //   setCurrentExercise(exercise);
  // }, []);

  return (
    <ItemPageWrapper>
      <FlexBox direction="column">
        <FlexBox justifyContent='space-between' alignItems='center' gap='16px'>
          <FlexBox alignItems='center'>
            <IconButton
              bgImg="/src/assets/icons/back.svg"
              width="32px"
              height="32px"
              m="0 16px 0 0"
              onClick={() => window.history.back()}
            />

            <Typography size="48px" color="black" weight="700">
              {currentExercise?.title}
            </Typography>
          </FlexBox>

          <FlexBox gridGap='32px' alignItems='center'>
            <IconButton
              width='40px'
              height='40px'
              bgImg='/src/assets/icons/edit.svg'
            />
            <IconButton
              width='40px'
              height='40px'
              bgImg='/src/assets/icons/delete.svg'
            />
          </FlexBox>
        </FlexBox>

        <ExerciseImage src={testGif} />

        <FlexBox direction='column' gap='16px'>
          <Typography color='black' size='22px' m='0'>
            {`Category: ${currentExercise?.category}`}
          </Typography>

          <Typography color='black' size='18px' m='0' weight='400'>
            {`Subcategory: ${currentExercise?.sub_category}`}
          </Typography>
        </FlexBox>

        <Separator />

        <Typography color='black' size='18px' weight='400'>
          {currentExercise?.description}
        </Typography>
      </FlexBox>
    </ItemPageWrapper>
  );
};

// eslint-disable-next-line max-len
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: string,
  height: string,
  bgImg: string,
  m?: string,
  onClick?: () => void,
}

const IconButton = styled.button<IconButtonProps>`
  width: ${(props: IconButtonProps) => props.width || '32px'};
  height: ${(props: IconButtonProps) => props.height || '32px'};
  margin: ${(props: IconButtonProps) => props.m || '0'};
  background-image: ${(props: IconButtonProps) => `url(${props.bgImg})`};
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

const ExerciseImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 32px;
`;

const Separator = styled.div`
  width: 100%;
  border: 1px solid #000000;
  margin-bottom: 24px;
`;
