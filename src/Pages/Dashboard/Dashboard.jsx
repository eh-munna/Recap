import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/shared/Header';
import useAdmin from '../../hooks/useAdmin';

export default function Dashboard() {
  // TODO: handle isAdmin
  const [isAdmin] = useAdmin();
  const adminNav = (
    <>
      <li className="rounded-sm border border-b-green-400">
        <NavLink className="px-2 py-1 " to="/">
          Home
        </NavLink>
      </li>
      <li className="rounded-sm border border-b-green-400">
        <NavLink className="px-2 my-1 " to="/dashboard/users">
          Users
        </NavLink>
      </li>
      <li className="rounded-sm border border-b-green-400">
        <NavLink className="px-2 my-1 " to="/dashboard/add-item">
          Add Items
        </NavLink>
      </li>
    </>
  );

  const userNav = (
    <>
      <li className="rounded-sm border border-b-green-400">
        <NavLink className="px-2 py-1 " to="/">
          Home
        </NavLink>
      </li>
      <li className="rounded-sm border border-b-green-400">
        <NavLink className="px-2 my-1 " to="/dashboard/cart">
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-3 grid grid-cols-3 gap-1">
        <div className="col-span-1 border">
          <ul className="flex flex-col gap-3 p-2">
            {isAdmin ? adminNav : userNav}
          </ul>
        </div>

        <main className="col-span-2 border p-2">
          <Outlet />
        </main>
      </div>
    </>
  );
}
