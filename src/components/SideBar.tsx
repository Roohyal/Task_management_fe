import { Link } from "react-router-dom";



import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed flex flex-col p-4 pt-8">
      <div className=" mt-6">
     <h2 className="text-3xl font-bold text-white-900">
              Task<span className="text-blue-500">I</span>T</h2>
      </div>
      <div className="mt-10">
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
        <li><Link to="/add-task" className="hover:text-blue-400">Add Task</Link></li>
        <li><Link to="/all-task" className="hover:text-blue-400">AllTasks</Link></li>
        <li><Link to="/completed-task" className="hover:text-blue-400">Completed Tasks</Link></li>
        <li><Link to="/logout" className="hover:text-blue-400">Logout</Link></li>
      </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
