import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
