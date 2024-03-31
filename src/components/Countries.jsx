import { useEffect, useState } from 'react';
import { Country } from './Country';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    const loadCountries = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    };
    loadCountries();
  }, []);

  const handleVisited = (name) => {
    const newCountry = name;
    if (visited.includes(newCountry)) {
      return;
    } else {
      setVisited([...visited, newCountry]);
    }
  };

  const country = countries.map((country) => (
    <Country key={country.cca2} country={country} onVisited={handleVisited} />
  ));

  return (
    <>
      <div className="my-6">
        <h1 className="text-xl font-bold py-3">List of Visited Countries!</h1>
        <ol className="list-decimal list-inside px-4">
          {visited.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-3 gap-3">{country}</div>
    </>
  );
}
