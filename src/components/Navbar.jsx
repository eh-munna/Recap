import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

export default function NavBar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={`/`}>
              <button onClick={handleLogOut}>Sign out</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/my-bookings`}>My Bookings</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={`/sign-in`}>Sign In</NavLink>
          </li>
          <li>
            <NavLink to={`/sign-up`}>Sign Up</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <ul className="flex gap-3 justify-around items-center border border-green-400 p-2 my-4 rounded-md">
        {navLinks}
      </ul>
    </>
  );
}
