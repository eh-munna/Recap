import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-center px-4 py-3">
          React Router!
        </h1>

        <ul className="flex justify-around mx-auto w-2/3 gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </header>
      <main className="container mx-auto px-4 py-3">
        <Outlet />
      </main>
    </>
  );
}
