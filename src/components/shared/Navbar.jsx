import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';

export default function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navLinks = (
    <>
      <ul className="flex justify-between items-center gap-3">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/our-menu`}>Our Menu</Link>
        </li>
        <li>
          <Link to={`/dashboard`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`/order`}>Order Food</Link>
        </li>
        <li>
          <Link to={`/cart`}>
            <button className="flex items-center gap-2">
              <FaCartPlus />
              <span>{cart.length}</span>
            </button>
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={`/sign-up`}>Sign Up</Link>
            </li>
            <li>
              <Link to={`/log-in`}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
  return (
    <>
      <nav className="flex justify-around items-center">
        <Link className="text-2xl">Restaurant</Link>
        {navLinks}
      </nav>
    </>
  );
}
