import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Form from '../components/Form';
import Update from '../components/Update';
import Users from '../components/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/form',
        element: <Form />,
      },

      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:3000/users'),
      },
      {
        path: `/users/:id`,
        element: <Update />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:3000/users/${id}`),
      },
    ],
  },
  {
    path: '/change',
    element: (
      <h1 className="text-center text-green-400 min-h-screen flex justify-center items-center">
        This is a different layout and page
      </h1>
    ),
  },
]);
