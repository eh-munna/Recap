import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/sign-up`}>Sign up</NavLink>
      </li>
      <li>
        <NavLink to={`/sign-in`}>Sign in</NavLink>
      </li>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
    </>
  );
  return (
    <>
      <ul className="flex gap-3 justify-around items-center">{navLinks}</ul>
    </>
  );
}
