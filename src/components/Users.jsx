import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:3000/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
    // fetch('http://localhost:3000/users')
    //   .then((res) => res.json())
    //   .then((data) => console.log(setUsers(data)));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const id = users.length + 1;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    (async () => {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      //   console.log(data);
      setUsers([...users, data]);
    })();
  };

  return (
    <>
      <form onSubmit={handleAddUser} className="space-y-6">
        <div>
          <input type="text" name="name" id="" />
        </div>
        <div>
          <input type="email" name="email" id="" />
        </div>
        <div>
          <button
            type="submit"
            className="border border-green-100 px-1 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      {users.map((user) => (
        <div className="mt-6" key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </>
  );
}
