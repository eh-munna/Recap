import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';

export default function Bookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `http://localhost:3000/my-bookings?email=${user?.email}`;
  const url = `/my-bookings?email=${user?.email}`;

  useEffect(() => {
    (async () => {
      // ? normal fetch API

      // const response = await fetch(url, {
      //   withCredentials: true,
      // });
      // const data = await response.json();
      // setBookings(data);

      // * axios API

      // const response = await axios.get(url, {
      //   withCredentials: true,
      // });
      // const { data } = await response;
      // setBookings(data);

      // * axiosSecure API

      const response = await axiosSecure.get(url);
      const { data } = await response;
      setBookings(data);
    })();
  }, [url, axiosSecure]);

  const handleDelete = (_id) => {
    (async () => {
      const response = await fetch(`http://localhost:3000/my-bookings/${_id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        setBookings(bookings.filter((booking) => booking._id !== _id));
      }
    })();
  };
  const handleUpdate = (_id) => {
    (async () => {
      const response = await fetch(`http://localhost:3000/my-bookings/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ status: 'Completed' }),
      });
      const data = await response.json();
      if (data.modifiedCount > 0) {
        setBookings(
          bookings.map((booking) =>
            booking._id === _id ? { ...booking, status: 'Completed' } : booking
          )
        );
      }
    })();
  };

  return (
    <>
      <div>
        <h2 className="text-xl text-center text-green-500 my-6">My Bookings</h2>
      </div>

      <div className="grid grid-cols-5 gap-3 my-6">
        <div>customer name</div>
        <div>service name</div>
        <div>price</div>
        <div>status</div>
        <div>delete</div>
      </div>

      {bookings.map((booking) => (
        <div
          key={booking}
          className="grid grid-cols-5 gap-3 border border-green-500 p-1 my-2 rounded-md"
        >
          <div>{booking.customerName}</div>
          <div>{booking.serviceTitle}</div>
          <div>€{booking.price}</div>
          <div>
            {booking.status === 'Pending' ? (
              <button onClick={() => handleUpdate(booking._id)}>
                Complete
              </button>
            ) : (
              <span className="text-green-500">{booking.status}</span>
            )}
          </div>
          <div>
            <button onClick={() => handleDelete(booking._id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
