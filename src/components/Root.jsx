import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Root() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-8 py-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
