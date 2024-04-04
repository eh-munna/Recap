import { useState } from 'react';
import NavLink from './NavLink';

import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
    },
    {
      id: 3,
      name: 'Services',
      path: '/services',
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact',
    },
    {
      id: 5,
      name: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <nav className="flex md:items-center">
      <span
        className="cursor-pointer text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BiMenuAltRight /> : <BiMenuAltLeft />}
      </span>
      {isOpen && (
        <>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mx-auto w-1/2">
            {routes.map((route) => (
              <NavLink key={route.id} route={route} />
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
