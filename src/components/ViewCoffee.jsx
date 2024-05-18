import { useLoaderData } from 'react-router-dom';

export default function ViewCoffee() {
  const loadedCoffee = useLoaderData();
  return (
    <>
      <div className="container mx-auto p-4 my-12">
        <div className="text-center border border-green-600 p-4 rounded-md">
          <img
            className="mx-auto"
            src={loadedCoffee.url}
            alt={loadedCoffee.name}
          />
          <h1 className="text-3xl text-green-400 text-center">
            {loadedCoffee.name}
          </h1>
        </div>
      </div>
    </>
  );
}
