// components/TaskTable.tsx
import React from "react";

interface Task {
  title: string;
  description: string;
  deadline: string;
  priority: string;
  status: string;
}

const TaskTable: React.FC<{ }> = () => {
  return (
    <div className="tabular--wrapper p-6 bg-gray-100 rounded-md shadow-lg">
  <h3 className="main--title text-xl font-bold text-gray-700 mb-4">Recently Added Tasks</h3>
  <div className="table-container overflow-x-auto bg-white rounded-md shadow-md">
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead className="bg-blue-200">
        <tr>
          <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Title</th>
          <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Description</th>
          <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Deadline</th>
          <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Priority Level</th>
          <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Status</th>
          <th className="px-4 py-2 border border-gray-300 text-center text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-blue-50">
          <td className="px-4 py-2 border border-gray-300">nothing</td>
          <td className="px-4 py-2 border border-gray-300">all I want</td>
          <td className="px-4 py-2 border border-gray-300">today</td>
          <td className="px-4 py-2 border border-gray-300 text-red-500 font-bold">High</td>
          <td className="px-4 py-2 border border-gray-300 text-green-600 font-semibold">Completed</td>
          <td className="px-4 py-2 border border-gray-300 text-center">
            {/* Add action buttons here */}
            <button className="text-blue-500 hover:underline">Edit</button>
            <span className="mx-2">|</span>
            <button className="text-red-500 hover:underline">Delete</button>
          </td>
        </tr>
        {/* Add more rows dynamically */}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default TaskTable;
