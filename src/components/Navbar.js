import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center w-1/2">
            {" "}
            <div className=" rounded-full p-2 w-full">
              {" "}
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
          </div>

      
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
