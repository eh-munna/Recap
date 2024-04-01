/* eslint-disable react/prop-types */
export default function Product({ product, onAddToCart }) {
  const { name, brand } = product;
  return (
    <>
      <div className="flex flex-col border border-indigo-500 rounded-lg px-2 py-4">
        <div className="text-center">
          <h1>{name}</h1>
          <p>Brand: {brand}</p>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-400 text-indigo-800 w-2/3 mx-auto rounded-md my-3 px-2 py-1"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
