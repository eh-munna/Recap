import { NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header className="container mx-auto px-2 w-2/3">
        <nav className="">
          <ul className="flex gap-3 items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-3">
        <Outlet />
      </main>
    </>
  );
}
