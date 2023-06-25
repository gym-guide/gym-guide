import styled from 'styled-components';

export const Exercises: React.FC = (): JSX.Element => {
  return (
    <ExerciseResultsContainer>
      <Title>Search results</Title>
      <CardContainer>
        <ExerciseCard>
          <ExerciseImage src="/" alt="Exercise 1" />
          <ExerciseTitle>Exercise 1</ExerciseTitle>
        </ExerciseCard>
        <ExerciseCard>
          <ExerciseImage src="/" alt="Exercise 2" />
          <ExerciseTitle>Exercise 2</ExerciseTitle>
        </ExerciseCard>
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

const ExerciseCard = styled.div`
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
