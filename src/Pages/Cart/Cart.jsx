import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

export default function Cart() {
  //   const { loading, setLoading } = useAuth();
  //   const [cart, setCart] = useState([]);
  //   const axiosSecure = useAxiosSecure();
  //   useEffect(() => {
  //     (async () => {
  //       const response = await axiosSecure.get('/carts');
  //       setCart(response.data);
  //       // setLoading(false);
  //     })();
  //   }, []);

  const [cart] = useCart();

  const totalAmount = cart.reduce((initial, item) => {
    return initial + item.price;
  }, 0);

  const lastRow = cart.length - 1;
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Total Products: {cart.length}</h1>
        <h1 className="text-2xl">Total Amount: {totalAmount}</h1>
      </div>

      <div className="border border-indigo-400 p-2 rounded-md">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div>Nr. Item</div>
          <div>Product Name</div>
          <div>Price</div>
          <div className="flex justify-center">Action</div>
        </div>

        {cart.map((item, idx) => (
          <CartItem key={item._id} item={item} idx={idx} lastRow={lastRow} />
        ))}
      </div>
    </>
  );
}
