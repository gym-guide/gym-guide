import { StyledButton } from '../../../styled/common/button';
import { Container } from '../../../styled/common/container';
import { Typography } from '../../../styled/common/typography';
import { Input } from '../../atoms/common/input';
import { GoogleAuth } from '../../atoms/auth/google-auth';
import { GitHubAuth } from '../../atoms/auth/github-auth';
import { FlexBox } from '../../../styled/common/flex-box';
import { CommonRoutes } from '../../../types/routes/common';
import { NavLink } from '../../../styled/common/nav-link';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Protected } from '../../../types/routes/protected';
import { useAppDispatch } from '../../../app/hooks';
import { actions } from '../../../features/users/userReducer';
import { easeOut } from 'framer-motion';
import { useCheckCredentialsForAnamation }
  from '../../../hooks/use-check-credentials-for-animation';
import { loginUser } from '../../../api/loginUser';
import { StyledForm } from '../../../styled/common/form';
import { StyledLabel } from '../../../styled/common/label';

export const Login: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const result = await loginUser(email, password);
      const user = result.email;

      dispatch(actions.setUser(user.email!));

      navigate(`${Protected.ROOT_PATH}`);
    } catch (error) {
      throw new Error(`Error from login: ${error}`);
    }
  };

  const handleSkip = () =>
    navigate('/');

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
          <StyledLabel>Email</StyledLabel>
          <Input value={email} handleValue={handleEmail} />
          <StyledLabel>Password</StyledLabel>
          <Input
            text='Password'
            type='password'
            value={password}
            handleValue={handlePassword}
          />
          <FlexBox height="auto" gridGap='20px'>
            <GoogleAuth />
            <GitHubAuth />
          </FlexBox>
          <StyledButton
            top='20px'
            animate={checkCredentials}
            whileTap={{
              scale: 0.9,
              transition: { ease: easeOut, duration: 0.05 },
            }}
            onClick={handleSubmit}
          >
            <Typography size='16px' cursor='pointer'>Sign in</Typography>
          </StyledButton>
          <Typography size='16px' cursor='pointer'>
            <NavLink to={`${CommonRoutes.SIGN_UP} `}>
              Don`t have an account? Register
            </NavLink >
          </Typography >
        </StyledForm>
      </Container>
    </>
  );
};

export default Login;
