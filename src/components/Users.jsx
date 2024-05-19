import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function Users() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    (async () => {
      const response = await fetch(`http://localhost:3000/users/${_id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        setUsers(users.filter((user) => user._id !== _id));
      }
    })();
  };

  return (
    <div className="container mx-auto p-4 my-4 space-y-4">
      <h1 className="text-center text-2xl">
        There {users.length <= 1 ? `is` : `are`} {users?.length}{' '}
        {users.length <= 1 ? `user` : `users`}
      </h1>

      <div className="grid grid-cols-3">
        <div>name</div>
        <div>email</div>
        <div className="flex justify-center">action</div>
      </div>
      {users?.map((user) => (
        <div key={user._id} className="grid grid-cols-3">
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div className="flex gap-3 justify-center items-center">
            <Link to={`/update-users/${user._id}`}>
              <button className="bg-green-400 p-2 rounded-md">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-400 p-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
