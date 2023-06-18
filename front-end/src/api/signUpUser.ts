import axios from 'axios';

import { User } from '../types/User';

export async function signUpUser(
  username: string,
  email: string,
  password: string,
  repeatPassword: string,
): Promise<User> {
  const result = await axios.post('http://localhost:8080/register', {
    username,
    email,
    password,
    repeatPassword,
    createdAt: (new Date()).toISOString(),
    updatedAt: (new Date()).toISOString(),
  });

  return result.data;
}
