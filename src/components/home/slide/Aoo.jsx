import React, { useState, useEffect } from 'react';


function Aoo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountriesData(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    const filtered = countriesData.filter(item =>
      item.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Country Search</h1>
      <input
        type="text"
        placeholder="Search countries"
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-3 py-2 w-64 mb-4"
      />
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default Aoo;
