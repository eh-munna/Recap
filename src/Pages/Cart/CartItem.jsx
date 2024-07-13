import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

export default function CartItem({ item, idx, lastRow }) {
  const { _id } = item;
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    (async () => {
      const res = await axiosSecure.delete(`/carts/${id}`);
      console.log(res.data);
      refetch();
    })();
  };

  return (
    <>
      <div
        className={`grid grid-cols-4 gap-3 py-2 border border-t-0 border-r-0 border-l-0 ${
          idx === lastRow ? 'border-b-0' : 'border-b-sky-400'
        }`}
      >
        <div>{idx + 1}</div>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleDelete(_id)}
            className="border border-green-400 p-1 rounded-md"
          >
            Delete
          </button>
          <button className="border border-green-400 p-1 rounded-md">
            Pay
          </button>
        </div>
      </div>
    </>
  );
}
