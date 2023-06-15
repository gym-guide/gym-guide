export interface User {
  id: number;
  firstName: string | null;
  secondName: string | null;
}

export interface initialStateForUser {
  userData: string;
  loading: boolean;
  success: boolean;
  message: string;
  error: boolean;
}
