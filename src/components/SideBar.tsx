import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed flex flex-col p-4 pt-8">
      <div className="mt-0 mb-2">
        <h2 className="text-3xl font-bold text-white-900">
          Task<span className="text-blue-500">I</span>T
        </h2>
      </div>
      <div className="mt-10">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className={`block px-4 py-2 rounded ${
                isActive("/dashboard") ? "bg-blue-500 text-white" : "hover:text-blue-400"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-task"
              className={`block px-4 py-2 rounded ${
                isActive("/dashboard/add-task") ? "bg-blue-500 text-white" : "hover:text-blue-400"
              }`}
            >
              Add Task
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/all-task"
              className={`block px-4 py-2 rounded ${
                isActive("/dashboard/all-task") ? "bg-blue-500 text-white" : "hover:text-blue-400"
              }`}
            >
              All Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/completed-task"
              className={`block px-4 py-2 rounded ${
                isActive("/dashboard/completed-task") ? "bg-blue-500 text-white" : "hover:text-blue-400"
              }`}
            >
              Completed Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`block px-4 py-2 rounded ${
                isActive("/logout") ? "bg-blue-500 text-white" : "hover:text-blue-400"
              }`}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
