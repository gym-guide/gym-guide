import { StyledButton } from '../../../styled/common/button';
import { Container } from '../../../styled/common/container';
import { Typography } from '../../../styled/common/typography';
import { Input } from '../../atoms/common/input';
import { GoogleAuth } from '../../atoms/auth/google-auth';
import { GitHubAuth } from '../../atoms/auth/github-auth';
import { FlexBox } from '../../../styled/common/flex-box';
import { CommonRoutes } from '../../../types/routes/common';
import { NavLink } from '../../../styled/common/nav-link';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Protected } from '../../../types/routes/protected';
// import { useAppDispatch } from '../../../app/hooks';
// import { actions } from '../../../features/users/userReducer';
import { easeOut } from 'framer-motion';
import { useCheckCredentialsForAnamation }
  from '../../../hooks/use-check-credentials-for-animation';

export const Login: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const auth = getAuth();
  // const submit = async() => {
  //   try {
  //     const result = await signInWithEmailAndPassword(auth, email, password);
  //     const user = result.user;

  //     dispatch(actions.setUser(user.email!));
  //     navigate(`${Protected.ROOT_PATH}`);
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // };

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
        <FlexBox height="auto" gridGap='20px'>
          <GoogleAuth />
          <GitHubAuth />
        </FlexBox>
        <StyledButton
          animate={checkCredentials}
          whileTap={{ scale: 0.9,
            transition: { ease: easeOut, duration: 0.5 } }}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        >
          <Typography size='16px'>Sign in</Typography>
        </StyledButton>
        <Typography size='16px' cursor='pointer'>
          <NavLink to={`${CommonRoutes.SIGN_UP} `}>
            Don`t have an account?... Sign Up
          </NavLink >
        </Typography >
      </Container >

    </>
  );
};

export default Login;
