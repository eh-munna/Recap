import { useLoaderData, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

export default function UpdateCoffee() {
  const navigate = useNavigate();
  const loadedCoffee = useLoaderData();
  console.log(loadedCoffee);

  const { _id, name, chef, price, url } = loadedCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = parseFloat(form.price.value);
    const url = form.url.value;
    const updatedCoffee = { name, chef, price, url };

    (async () => {
      const response = await fetch(
        `http://localhost:3000/update-coffee/${_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedCoffee),
        }
      );
      const data = await response.json();
      if (data.modifiedCount > 0) {
        navigate(`/`);
        toast.success('Coffee is updated!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    })();
  };

  return (
    <>
      <form
        onSubmit={handleUpdateCoffee}
        className="flex flex-col w-1/2 mx-auto gap-3 my-3"
      >
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          defaultValue={name}
          name="name"
          id="name"
          placeholder="Name"
        />

        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          defaultValue={chef}
          name="chef"
          placeholder="Chef"
        />
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          defaultValue={price}
          name="price"
          placeholder="Price"
        />
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="url"
          defaultValue={url}
          name="url"
          id="url"
          placeholder="Photo Url"
        />
        <button className="rounded-md border border-green-400 p-2 w-1/2 mx-auto">
          Update Coffee
        </button>
      </form>
    </>
  );
}
