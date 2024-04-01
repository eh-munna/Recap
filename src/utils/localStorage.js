// export const removeFromLocalStorage = (item) => {
//   const storedItem = getStoredItem();
//   const index = storedItem.indexOf(item);
//   if (index !== -1) {
//     storedItem.splice(index, 1);
//     setStoredItem(storedItem);
//   }
// };

export const getStoredItem = () => {
  const storedItem = localStorage.getItem('cart');
  if (storedItem) {
    return JSON.parse(storedItem);
  }
  return [];
};

export const setStoredItem = (ids) => {
  localStorage.setItem('cart', JSON.stringify(ids));
};

export const removeFromStorage = (item) => {
  const storedItem = getStoredItem();
  const index = storedItem.indexOf(item);
  if (index !== -1) {
    storedItem.splice(index, 1);
    setStoredItem(storedItem);
  }
};

export const addToStorage = (id) => {
  const storedItem = getStoredItem();
  storedItem.push(id);
  setStoredItem(storedItem);
};
