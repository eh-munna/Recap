export default function Form() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    // hitting the backend to send data

    (async () => {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.insertedId) {
        form.reset();
      }
    })();
  };

  return (
    <>
      <h1 className="text-center text-green-400">User Information</h1>

      <form
        onSubmit={handleAddUser}
        className="mx-auto max-w-lg border border-green-400 rounded-md p-2 space-y-2"
      >
        <div>
          <input
            className="px-2 py-1 rounded-md"
            type="text"
            name="name"
            id=""
          />
        </div>
        <div>
          <input
            className="px-2 py-1 rounded-md"
            type="email"
            name="email"
            id=""
          />
        </div>
        <div>
          <button
            className="border border-orange-400 px-2 py-1 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
