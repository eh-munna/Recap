import { useState } from 'react';

/* eslint-disable react/prop-types */
export function Country({ country, onVisited }) {
  const [isVisited, setIsVisited] = useState(false);
  const {
    name: { official: name },
    flags: { png },
  } = country;

  const handleVisit = () => {
    setIsVisited(true);
  };

  return (
    <>
      <div className="flex flex-col border border-indigo-300 p-2 rounded-md">
        <img src={png} alt={name} className="w-auto h-24 mx-auto" />
        <h2 className="text-center text-lg">{name}</h2>
        <button
          type="button"
          className={`text-white font-bold py-2 px-4 rounded ${
            !isVisited
              ? 'bg-indigo-500 hover:bg-indigo-700'
              : 'bg-green-500 hover:bg-green-700'
          }`}
          onClick={() => {
            handleVisit();
            onVisited(name);
          }}
          disabled={isVisited}
        >
          {!isVisited ? `Start` : `Done`}
        </button>
      </div>
    </>
  );
}
