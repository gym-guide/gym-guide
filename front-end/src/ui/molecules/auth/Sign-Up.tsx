import { StyledButton } from '../../../styled/common/button';
import { Container } from '../../../styled/common/container';
import { NavLink } from '../../../styled/common/nav-link';
import { Typography } from '../../../styled/common/typography';
import { CommonRoutes } from '../../../types/routes/common';
import { Input } from '../../atoms/common/input';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useCheckCredentialsForAnamation } from
  '../../../hooks/use-check-credentials-for-animation';
import { signUpUser } from '../../../api/signUpUser';
import { StyledForm } from '../../../styled/common/form';
import { StyledLabel } from '../../../styled/common/label';
import { useNavigate } from 'react-router-dom';
import { easeOut } from 'framer-motion';

export const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigate = useNavigate();

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRepeatPassword(e.target.value);

  const handleSubmit = async(e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      await signUpUser(userName, email, password, repeatPassword);
    } catch (error) {
      throw new Error(`ERRRROORRRRRRR: ${error}`);
    }
  };

  const handleSkip = () =>
    navigate('/main');

  const checkCredentials = useCheckCredentialsForAnamation(email, password);

  return (
    <>
      <Container>
        <StyledButton
          position='absolute'
          right='0'
          margin='20px'
          left='auto'
          width='100px'
          height='50px'
          whileTap={{
            scale: 0.9,
            transition: { ease: easeOut, duration: 0.05 },
          }}
          onClick={handleSkip}
        >
          <Typography size='16px' cursor='pointer'>Skip</Typography>
        </StyledButton>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Name</StyledLabel>
          <Input
            text='John'
            type='username'
            value={userName}
            handleValue={handleUserName}
          />
          <StyledLabel>Email</StyledLabel>
          <Input value={email} handleValue={handleEmail} />
          <StyledLabel>Password</StyledLabel>
          <Input
            text='Password'
            type='password'
            value={password}
            handleValue={handlePassword}
          />
          <StyledLabel>Confirm Password</StyledLabel>
          <Input
            text='Confirm Password'
            type='password'
            value={repeatPassword}
            handleValue={handleRepeatPassword}
          />
          <StyledButton
            onClick={handleSubmit}
            animate={checkCredentials}
            disabled={!userName || !email || !password}
          >
            <Typography size='16px'>Register</Typography>
          </StyledButton>
          <Typography size='16px' cursor='pointer'>
            <NavLink to={`${CommonRoutes.LOG_IN}`}>
              Already have an account? Sign in
            </NavLink >
          </Typography >
        </StyledForm>
      </Container>
    </>
  );
};
