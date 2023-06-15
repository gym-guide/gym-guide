import { useRoutes } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { CommonRouter } from './routes/common';
// import { ProtectedRoutes } from './routes/protected';
import DefaultPage from './ui/molecules/default';
import { AuthGuard } from './utils/auth-guard';
import { Protected } from './types/routes/protected';
import { CommonRoutes } from './types/routes/common';
import Login from './ui/molecules/auth/Login';
import { SignUp } from './ui/molecules/auth/Sign-Up';
// import { myTheme } from './styled/my-theme';

function App() {
  const content = useRoutes([
    {
      path: `${Protected.ROOT_PATH}`,
      element: <AuthGuard />,
      children: [
        {
          path: 'messages',
          element: <DefaultPage />,
        },
      ],
    },

    { path: `${CommonRoutes.LOG_IN}`,
      element: <Login /> },

    { path: `${CommonRoutes.SIGN_UP}`,
      element: <SignUp /> },
  ]);

  return content;
}

export default App;
