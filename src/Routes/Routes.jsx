import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Cart from '../Pages/Cart/Cart';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Users from '../Pages/Dashboard/Users/Users';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Order from '../Pages/Order/Order';
import OurMenu from '../Pages/OurMenu/OurMenu';
import SignUp from '../Pages/SignUp/SignUp';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/our-menu',
        element: <OurMenu />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/log-in',
        element: <Login />,
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/add-item',
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/users',
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
