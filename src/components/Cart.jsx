/* eslint-disable react/prop-types */
export default function Cart({ cart, onRemove }) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-center">Cart</h1>
        <p>Quantity: {cart.length}</p>
      </div>
      <ul className="">
        {cart.map((product, index) => (
          <li
            className="flex gap-3 justify-between items-center mt-1"
            key={product.id + '' + index}
          >
            {product.name}{' '}
            <button
              onClick={() => onRemove(product.id)}
              className="border border-indigo-400 rounded-md p-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
