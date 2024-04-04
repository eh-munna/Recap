import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import UserDetails from './components/UserDetails.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: '/users/:id',
        element: <UserDetails />,
        // loader: ({ id }) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`),

        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
