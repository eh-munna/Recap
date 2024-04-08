import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import Sidebar from '../components/Sidebar';

export default function HomeLayout() {
  return (
    <>
      <main className="container mx-auto px-2 py-2">
        <div className="grid grid-cols-10 gap-5">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-5">
            <Outlet />
          </div>
          <div className="col-span-2">
            <Aside />
          </div>
        </div>
      </main>
    </>
  );
}
