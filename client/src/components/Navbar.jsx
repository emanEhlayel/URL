import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow h-16 flex items-center px-6">
      {/* اللوجو على الشمال */}
      <Link to="/" className="z-10">
        <img src="/logo.png" className="w-10 h-10" alt="Logo" />
      </Link>

      {/* القائمة في المنتصف */}
      <ul className="flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/sign-up" className="hover:underline">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
