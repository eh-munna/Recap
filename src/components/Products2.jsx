import { useEffect, useState } from 'react';
import { getStoredItem } from '../utils/localStorage';
import Cart2 from './Cart2';
import Product from './Product';

export default function Products2() {
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
    const exist = cart.find((p) => p.id === product.id);
    if (exist) {
      const updatedCart = cart.map((product) => {
        if (product.id === exist.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // addToStorage(product.id, product.quantity);
  };

  const handleRemoveFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    // removeFromStorage(productId);
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
          <Cart2 cart={cart} onRemove={handleRemoveFromCart} />
        </div>
      </div>
    </>
  );
}
