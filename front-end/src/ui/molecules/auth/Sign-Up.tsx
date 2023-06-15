/* eslint-disable @typescript-eslint/no-empty-function */
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

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  // const auth = getAuth();

  // const submit = () => createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   }
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  const checkCredentials = useCheckCredentialsForAnamation(email, password);

  return (
    <>
      <Container>
        <Input value={email} handleValue={handleEmail} />
        <Input
          text='password'
          type='password'
          value={password}
          handleValue={handlePassword}
        />
        <StyledButton onClick={(e) => {}} animate={checkCredentials}>
          <Typography size='16px'>Sign Up</Typography>
        </StyledButton>
        <Typography size='16px' cursor='pointer'>
          <NavLink to={`${CommonRoutes.LOG_IN} `}>
            Do you have an account?... Sign In
          </NavLink >
        </Typography >
      </Container>
    </>
  );
};
