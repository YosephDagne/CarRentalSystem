import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo or Brand Name */}
      <div className="text-white text-2xl font-bold">
        <Link to="/">Car Rental</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white text-lg hover:text-gray-300 transition-all"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-white text-lg hover:text-gray-300 transition-all"
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
