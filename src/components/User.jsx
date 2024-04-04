/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';

export default function User({ user }) {
  const navigate = useNavigate();
  const { id, name } = user;
  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="border border-indigo-400 bg-sky-500 text-white p-3">
      <h1 className="text-xl font-bold text-center px-4 py-3">{name}</h1>
      <div className="flex gap-2">
        <Link to={`/users/${id}`}>
          <button className="bg-green-600 border border-sky-100 rounded-md px-2 py-1">
            Show Details
          </button>
        </Link>

        <button
          onClick={handleNavigate}
          className="bg-green-600 border border-sky-100 rounded-md px-2 py-1"
        >
          Click me
        </button>
      </div>
    </div>
  );
}
