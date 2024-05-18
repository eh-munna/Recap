import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/add-coffee',
    element: <AddCoffee />,
  },
  {
    path: '/update-coffee/:id',
    element: <UpdateCoffee />,
    loader: ({ params: { id } }) =>
      fetch(`http://localhost:3000/view-coffee/${id}`),
  },
  {
    path: '/view-coffee/:id',
    element: <ViewCoffee />,
    loader: ({ params: { id } }) =>
      fetch(`http://localhost:3000/view-coffee/${id}`),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
