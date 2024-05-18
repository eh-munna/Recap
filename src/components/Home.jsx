import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import Coffee from './Coffee';

export default function Home() {
  const [coffees, setCoffee] = useState([]);
  console.log(coffees);

  const handleDelete = (_id) => {
    const deleteConfirm = confirm('Are you sure you want to delete');
    if (deleteConfirm) {
      (async () => {
        const response = await fetch(
          `http://localhost:3000/delete-coffee/${_id}`,
          {
            method: 'DELETE',
          }
        );
        const data = await response.json();
        if (data.deletedCount > 0) {
          toast.success('Coffee Deleted!', {
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
          setCoffee(coffees.filter((coffee) => coffee._id !== _id));
        }
      })();
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/coffees`);
      const data = await response.json();
      setCoffee(data);
    })();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
