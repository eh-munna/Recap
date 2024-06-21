import { useEffect, useState } from 'react';

export default function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/services');
      const data = await response.json();
      setServices(data);
    })();
  }, []);

  return services;
}
