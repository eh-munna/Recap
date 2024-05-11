import { useLoaderData } from 'react-router-dom';

export default function Update() {
  const user = useLoaderData();
  console.log(user._id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };

    (async () => {
      const response = await fetch(`http://localhost:3000/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      console.log(data);
    })();
  };

  return (
    <>
      <h1 className="text-center text-green-400">Update User Information</h1>
      <form
        onSubmit={handleUpdate}
        className="mx-auto max-w-lg border border-green-400 rounded-md p-2 space-y-2"
      >
        <div>
          <input
            className="px-2 py-1 rounded-md"
            type="text"
            name="name"
            defaultValue={user.name}
          />
        </div>
        <div>
          <input
            className="px-2 py-1 rounded-md"
            type="email"
            name="email"
            defaultValue={user.email}
          />
        </div>
        <div>
          <button
            className="border border-orange-400 px-2 py-1 rounded-md"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}
