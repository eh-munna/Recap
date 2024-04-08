import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import NewsLayout from '../Layouts/NewsLayout';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import News from '../pages/News/News';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/news',
    element: <NewsLayout />,
    children: [
      {
        path: '/news',
        element: <News />,
      },
    ],
  },
]);
