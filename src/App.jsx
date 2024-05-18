import Home from './components/Home';

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-center px-4 py-3">
          Coffee Emporium!
        </h1>
      </header>
      <main className="container mx-auto px-4 py-3">
        <Home />
      </main>
    </>
  );
}
