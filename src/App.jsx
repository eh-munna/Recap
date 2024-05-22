import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-center px-4 py-3 text-sky-400">
          Car Doctor!
        </h1>
      </header>
      <main className="container mx-auto px-4 py-3">
        <NavBar />
        <Outlet />
      </main>
    </>
  );
}
