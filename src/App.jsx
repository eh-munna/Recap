import Users from './components/Users';

export default function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-center px-4 py-3">
          React Core!
        </h1>
      </header>
      <main className="container mx-auto px-4 py-3">
        {/* <Device /> */}
        {/* <Handlers /> */}
        <Users />
      </main>
    </>
  );
}
