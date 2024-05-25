import { useLoaderData } from 'react-router-dom';
import Order from './Order';

export default function Checkout() {
  const checkoutItem = useLoaderData();

  return (
    <>
      <h3 className="text-center my-6 text-2xl">
        Service for: {checkoutItem.title}
      </h3>

      <Order service={checkoutItem} />
    </>
  );
}
