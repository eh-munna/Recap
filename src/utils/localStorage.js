export const getStoredItem = () => {
  const storedItem = localStorage.getItem('cart');
  if (storedItem) {
    return JSON.parse(storedItem);
  }
  return [];
};

export const setStoredItem = (items) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

export const removeFromStorage = (itemId) => {
  const storedItems = getStoredItem();
  const updatedItems = storedItems.filter((item) => item.id !== itemId);
  setStoredItem(updatedItems);
};

export const addToStorage = (id, quantity = 1) => {
  const storedItems = getStoredItem();
  const existingItemIndex = storedItems.findIndex((item) => item.id === id);
  if (existingItemIndex !== -1) {
    storedItems[existingItemIndex].quantity += quantity;
  } else {
    storedItems.push({ id, quantity });
  }
  setStoredItem(storedItems);
};
