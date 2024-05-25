import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

export default function Order({ service }) {
  const { user } = useContext(AuthContext);
  const { title, price } = service;

  const handleOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user?.email ?? form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const newOrder = {
      serviceTitle: title,
      customerName: name,
      email: email,
      phone: phone,
      message: message,
      price,
    };
    console.log(newOrder);

    (async () => {
      const response = await fetch(`http://localhost:3000/addBooking`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
      const data = await response.json();
      console.log(data);
    })();
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Order Confirmation
          </h2>
          <form onSubmit={handleOrder} className="w-full">
            <div className="flex gap-3">
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mb-4 w-full">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  readOnly
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded mt-1 h-24"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
              >
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
