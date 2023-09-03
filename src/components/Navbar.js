// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    // <nav className=" p-4 text-white flex justify-between items-center">
    //   <div className="flex items-center space-x-4">
    //     <div className="relative ">
    //       <SearchBar />

    //     </div>

    //   </div>
    //   <Link to="/" className="text-lg font-bold text-slate-500">
    //     Home
    //   </Link>
    // </nav>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center w-1/2">
          {" "}
          {/* Adjust width to half of the screen */}
          <div className=" rounded-full p-2 w-full">
            {" "}
            {/* Adjust width to full width of the container */}
            <SearchBar />
          </div>
        </div>

        <Link to="/" className="text-white text-2xl font-semibold mr-4">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
