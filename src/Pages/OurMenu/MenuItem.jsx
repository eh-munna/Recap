import { useLocation, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

export default function MenuItem({ items }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        userEmail: user.email,
        menuItemId: item._id,
        name: item.name,
        price: item.price,
      };
      (async () => {
        const response = await axiosSecure.post('/carts', cartItem);
        const { data } = response;
        if (data.insertedId) {
          toast.success(`${item.name} is added to the cart`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
          refetch();
        }
      })();

      // navigate("/order", { state: { from: location } });
    } else {
      const result = confirm('Please log in to add items to the cart');
      if (result) {
        navigate('/log-in', { state: { from: location } });
      }
    }
  };

  const menuItems = items.map((menuItem) => {
    const { _id, image, name, price, recipe } = menuItem;
    return (
      <div key={_id} className="border border-indigo-400 p-4 rounded-md">
        <img className="flex mx-auto" src={image} alt="" />
        <div className="mt-3 flex flex-col justify-between items-center">
          <div className="space-y-2">
            <h3>{name}</h3>
            <p>Price: {price}€</p>
            <p>Recipe: {recipe}</p>
          </div>
          <div className="flex justify-center mt-8 w-full">
            <button
              onClick={() => {
                handleAddToCart(menuItem);
              }}
              className="w-full border border-sky-400 p-1 rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return menuItems;
}
