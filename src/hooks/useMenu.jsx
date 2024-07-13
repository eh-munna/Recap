import { useEffect, useState } from 'react';

export default function useMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/our-menu')
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return [menu];
}
