import { useEffect, useState } from 'react';
import {
  addToStorage,
  getStoredItem,
  removeFromStorage,
} from '../utils/localStorage';
import Cart from './Cart';
import Product from './Product';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const storedItems = getStoredItem();
      const items = [];
      for (const id of storedItems) {
        const nextItem = products.find((p) => p.id === id);
        items.push(nextItem);
      }
      setCart(items);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToStorage(product.id);
  };

  const handleRemoveFromCart = (id) => {
    // setCart(cart.filter((p) => p.id !== id));
    removeFromStorage(id);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="grid grid-cols-3 col-span-3 gap-3">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="col-span-1 space-y-3">
          <Cart cart={cart} onRemove={handleRemoveFromCart} />
        </div>
      </div>
    </>
  );
}
