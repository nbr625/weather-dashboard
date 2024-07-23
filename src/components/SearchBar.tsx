import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="border rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
