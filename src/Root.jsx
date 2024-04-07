import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function Root() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-3">
        <Outlet />
      </main>
    </>
  );
}
