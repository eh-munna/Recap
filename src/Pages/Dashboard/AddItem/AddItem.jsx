import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


/* 


name
"Tuna Niçoise"
recipe
"Warm goats cheese and roasted vegetable salad with black olive tapenad…"
image
"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-…"
category
"dessert"
price


*/


export default function AddItem() {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    recipe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can handle form submission here, e.g., send data to a server.

    (async () => {
      // Example: Send data to a server using an axios request
      const res = await axiosSecure.post('/our-menu', formData);
      console.log(res.data);
    })();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="recipeName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Recipe Name
            </label>
            <input
              type="text"
              id="recipeName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-semibold mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipeDetails"
              className="block text-gray-700 font-semibold mb-2"
            >
              Recipe Details
            </label>
            <textarea
              id="recipeDetails"
              name="recipe"
              value={formData.recipe}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
