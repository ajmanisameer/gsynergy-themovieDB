// SearchBar.js
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
  <input
        type="text"
        className="py-1 px-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-400 w-2/3 mr-2"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
