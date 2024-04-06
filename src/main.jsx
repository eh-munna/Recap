import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import Root from './components/Root.jsx';
import AppliedJobs from './pages/AppliedJobs.jsx';
import Blog from './pages/Blog.jsx';
import Home from './pages/Home/Home.jsx';
import Statistics from './pages/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
