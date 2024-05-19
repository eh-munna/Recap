import { useLoaderData } from 'react-router-dom';

import { toast } from 'react-toastify';

export default function UpdateUser() {
  const loadedUser = useLoaderData();
  console.log(loadedUser);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const updatedUser = { name, role };
    (async () => {
      const response = await fetch(
        `http://localhost:3000/update-users/${loadedUser._id}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        }
      );
      const data = await response.json();
      if (data.modifiedCount > 0) {
        toast.success('User is updated!', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: true,
        });
      }
    })();
  };

  return (
    <>
      <form
        onSubmit={handleUpdateUser}
        className="flex flex-col w-1/2 mx-auto gap-3 my-3"
      >
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          defaultValue={loadedUser?.name}
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          defaultValue={loadedUser?.role}
          name="role"
          placeholder="role"
          id="role"
        />
        {/* <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="url"
          //   defaultValue={}
          name="url"
          id="url"
          placeholder="Photo Url"
        /> */}
        <button className="rounded-md border border-green-400 p-2 w-1/2 mx-auto">
          Update User
        </button>
      </form>
    </>
  );
}
