import { Bounce, toast } from 'react-toastify';

export default function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = parseFloat(form.price.value);
    const url = form.url.value;
    const coffee = { name, chef, price, url };

    (async () => {
      const response = await fetch(`http://localhost:3000/add-coffee`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(coffee),
      });
      const data = await response.json();
      console.log(data);
      if (data.insertedId) {
        toast.success('New Coffee Added!', {
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
        onSubmit={handleAddCoffee}
        className="flex flex-col w-1/2 mx-auto gap-3 my-3"
      >
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />

        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          name="chef"
          placeholder="Chef"
        />
        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="text"
          name="price"
          placeholder="Price"
        />

        <input
          className="border border-green-400 p-2 bg-transparent rounded-md"
          type="url"
          name="url"
          id="url"
          placeholder="Photo Url"
        />
        <button className="rounded-md border border-green-400 p-2 w-1/2 mx-auto">
          Add New Coffee
        </button>
      </form>
    </>
  );
}
