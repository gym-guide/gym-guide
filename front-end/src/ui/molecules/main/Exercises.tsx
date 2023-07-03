import styled from 'styled-components';
import { ExerciseCard } from '../../../components/ExerciseCard';

const mockData = [
  {
    id: 0,
    title: 'Hulf Crunch',
    // eslint-disable-next-line max-len
    description: 'The "Half Crunch" exercise is a core strengthening exercise that targets the abdominal muscles. It is a modified version of the traditional crunch exercise, focusing on the upper portion of the abdominal muscles.',
    category: 'FRONT',
    sub_category: 'ABS',
    image_path: 'back-end/src/main/resources/images/front/abs/Hulf Crunch.png',
    gif_path: 'back-end/src/main/resources/gifs/front/abs/Hulf Crunch.gif',
  },
  {
    id: 0,
    title: 'Hulf Crunch',
    // eslint-disable-next-line max-len
    description: 'The "Half Crunch" exercise is a core strengthening exercise that targets the abdominal muscles. It is a modified version of the traditional crunch exercise, focusing on the upper portion of the abdominal muscles.',
    category: 'FRONT',
    sub_category: 'ABS',
    image_path: 'back-end/src/main/resources/images/front/abs/Hulf Crunch.png',
    gif_path: 'back-end/src/main/resources/gifs/front/abs/Hulf Crunch.gif',
  },
];

export const Exercises: React.FC = (): JSX.Element => {
  return (
    <ExerciseResultsContainer>
      <Title>Search results</Title>
      <CardContainer>
        {mockData.map(exercise => (
          <ExerciseCard exercise={exercise} />
        ))}
      </CardContainer>
    </ExerciseResultsContainer>
  );
};

const ExerciseResultsContainer = styled.div`
  display: flex;
  grid-area: Exercises;
  display: block;
  padding: 16px;
  background-color: #e3e3e3;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ExerciseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ExerciseImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ExerciseTitle = styled.h3`
  font-size: 16px;
  text-align: center;
`;

export default Exercises;
