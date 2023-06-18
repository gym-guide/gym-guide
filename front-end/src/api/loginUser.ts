import axios from 'axios';

import { User } from '../types/User';

export async function loginUser(
  email: string,
  password: string,
): Promise<User> {
  const result = await axios.post('http://localhost:8080/login', {
    email,
    password,
  });

  return result.data;
}
