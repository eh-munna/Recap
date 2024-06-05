import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Bookings from '../Bookings';
import Checkout from '../Checkout';
import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import PrivateRoute from './PrivateRoute';

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
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:3000/checkout/${id}`),
      },
      {
        path: '/my-bookings',
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
