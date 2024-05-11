import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function Users() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    (async () => {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        setUsers(users.filter((user) => user._id !== id));
      }
    })();
  };

  return (
    <>
      <h1 className="text-center text-green-400">
        There {users.length > 1 ? `are` : `is`} {users.length}{' '}
        {users.length > 1 ? `users` : `user`}
      </h1>

      <ul>
        {users.map((user) => (
          <li
            className="flex justify-between items-center mb-2 border border-green-400 rounded-md w-2/3 p-2"
            key={user._id}
          >
            <div className="flex-grow">
              <p>{user.name}</p>
              <p className="pl-2">{user.email}</p>
            </div>
            <div className="flex justify-between items-center gap-3">
              <div>
                <Link to={`/users/${user._id}`}>
                  <button className="border border-orange-400 rounded-md p-1">
                    Update
                  </button>
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="border border-orange-400 rounded-md p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
