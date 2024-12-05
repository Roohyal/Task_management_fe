// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <span>Menu</span>
        <i className="fas fa-times close-icon"></i>
      </div>
      <ul className="nav-menu">
      <li>
          <Link to ="/dashboard" className="hover:underline text-black-100">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" > Profile</Link>
        </li>
        <li>
          <Link to="/add-task" className="hover:underline text-black-100">
            Add Tasks
          </Link>
        </li>
        <li>
          <Link to ="/all-task" className="hover:underline text-black-100 "> All Task</Link>
        </li>
        <li><Link to="/completed" className="hover:underline text-black-100">Completed Tasks</Link> </li>
        
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
};

export default Navbar;