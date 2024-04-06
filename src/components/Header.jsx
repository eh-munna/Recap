import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="container mx-auto pt-2">
        {/* <h1 className="text-3xl font-bold text-center px-4 py-3">
          Career Hub!
        </h1> */}

        <nav className="flex justify-between items-center w-2/3 mx-auto border border-sky-400 p-3 rounded-md">
          <Link to="/">Career Hub!</Link>

          <ul className="flex items-center gap-6">
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/applied-jobs">Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
