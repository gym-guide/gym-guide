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
    // {
    //   path: `${CommonRoutes.MAIN}`,
    //   element: <AuthGuard />,
    //   children: [
    //     {
    //       path: `${CommonRoutes.MAIN}`,
    //       element: <DefaultPage />,
    //     },
    //   ],
    // },

    { path: `${CommonRoutes.LOG_IN}`,
      element: <Login /> },

    { path: `${CommonRoutes.SIGN_UP}`,
      element: <SignUp /> },

    // { path: `${CommonRoutes.MAIN}`,
    //   element: <DefaultPage /> },

    {
      path: `${CommonRoutes.MAIN}`,
      element: <DefaultPage />,
      children: [
        {
          path: `${CommonRoutes.MAIN}`,
          element: <DefaultPage />,
        },
      ],
    },
  ]);

  return content;
}

export default App;
