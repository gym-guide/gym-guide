export const useCheckCredentialsForAnamation = (arg1: string, arg2: string) =>
  arg1
  && arg2 ? { opacity: 1 } : { opacity: 0.6, 'pointer-events': 'none' };
