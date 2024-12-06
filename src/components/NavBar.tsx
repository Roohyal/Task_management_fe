// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar flex justify-between items-center bg-blue-100 p-4 shadow-md z-50">
    {/* Welcome Message */}
    <span className="text-xl font-semibold">
      Welcome, <span className="text-blue-500"> Royal</span>
    </span>

    {/* Profile Icon */}
    <Link to="/dashboard/profile" className="text-2xl text-gray-700 hover:text-blue-500">
      <i className="fas fa-user-circle"></i>
    </Link>
  </div>
  );
};

export default Navbar;
