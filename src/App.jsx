import Products from './components/Products';

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-center px-4 py-3">
          ES6 Modules Overview!
        </h1>
      </header>
      <main className="container mx-auto px-4 py-3">
        <Products />
      </main>
    </>
  );
}
