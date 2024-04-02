/* eslint-disable react/prop-types */
export default function Cart2({ cart, onRemove }) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-center">Cart</h1>
        <p>Total Items: {cart.length}</p>
      </div>
      <div className="">
        {cart.map((product) => (
          <ul
            key={product.id}
            className="flex gap-3 justify-between items-center mt-1"
          >
            <li className="" key={product.id}>
              {product.name}{' '}
            </li>
            <li>Quantity:{product.quantity}</li>
            <li>
              <button
                onClick={() => onRemove(product.id)}
                className="border border-indigo-400 rounded-md p-1"
              >
                Remove
              </button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
