import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import TaskOverview from "../components/TaskOverview";
import TaskTable from "../components/TaskTable";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />
        
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
  );
};

export default DashboardLayout;


export const DashboardDefault: React.FC = () => {
    return (
        <div className=" bg-gray-100 p-6">
        <TaskOverview />
        <TaskTable />
        </div>
    );
  };
