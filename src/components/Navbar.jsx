import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="container mx-auto px-4 py-3 border border-sky-300 rounded-md flex items-center">
      <ul className="flex gap-3 items-center flex-grow">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
      <ul className="flex gap-3 items-center">
        {user ? (
          <>
            <li>
              <span>
                {user.displayName === null ? user.email : user.displayName}
              </span>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
