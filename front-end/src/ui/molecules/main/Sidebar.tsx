import styled from 'styled-components';
import { StyledButton } from '../../../styled/common/button';
import { Typography } from '../../../styled/common/typography';
import {
  ButtonContainer,
  SidebarContainer,
} from '../../../styled/side-bar/container';
import { Checkbox, CheckboxLabel } from '../../../styled/side-bar/checkbox';
import { Select } from '../../../styled/side-bar/select';
import { StyledInput } from '../../../styled/common/input';

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <SidebarContainer>
      <Typography
        color='black'
        size='20px'
      >
        Search by
      </Typography>

      <CheckboxLabel>
        <Checkbox type="checkbox" />
        Title
      </CheckboxLabel>

      <StyledInput
        type="text"
        placeholder="Title"
        mb='25px'
        background='white'
        border='2px solid black'
      />

      <CheckboxLabel>
        <Checkbox type="checkbox" />
        Category
      </CheckboxLabel>

      <Select>
        <optgroup label="Group 1">
          <option>Option 1</option>
          <option>Option 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option>Option 3</option>
          <option>Option 4</option>
        </optgroup>
        <optgroup label="Group 3">
          <option>Option 5</option>
          <option>Option 6</option>
        </optgroup>
        <optgroup label="Group 4">
          <option>Option 7</option>
          <option>Option 8</option>
        </optgroup>
        <optgroup label="Group 5">
          <option>Option 9</option>
          <option>Option 10</option>
        </optgroup>
      </Select>

      <ButtonContainer>
        <StyledButton
          bgc="white"
          border="2px solid black"
          color="black"
        >
          <Typography color="black">Clear</Typography>
        </StyledButton>
        <StyledButton
          bgc="black"
          border="2px solid black"
          color="black"
        >
          <Typography color="white">Submit</Typography>
        </StyledButton>
      </ButtonContainer>
    </SidebarContainer>
  );
};

const Title = styled.h1`
  display: flex;
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 16px;
`;

export default Sidebar;
