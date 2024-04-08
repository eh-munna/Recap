import { Outlet } from 'react-router-dom';

export default function NewsLayout() {
  return (
    <>
      <main className="container mx-auto px-2 py-2">
        <div className="col-span-5">
          <Outlet />
        </div>
      </main>
    </>
  );
}
