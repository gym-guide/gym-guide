export interface User {
  id: number;
  email: string | null;
  username: string | null;
  password: string;
  role: string;
}

export interface initialStateForUser {
  userData: string;
  loading: boolean;
  success: boolean;
  message: string;
  error: boolean;
}
