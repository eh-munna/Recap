import { useEffect, useState } from 'react';
import User from './User';
const url = `https://jsonplaceholder.typicode.com/users`;
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold px-4 py-3">All Users</h1>
      </header>
      <ol className="list-decimal list-inside">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ol>
    </>
  );
}
