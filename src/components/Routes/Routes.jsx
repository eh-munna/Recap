import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
]);
