// components/TaskTable.tsx
import React, { useState, useEffect } from "react";

interface Task {
  taskName: string;
  taskDescription: string;
  deadline: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  taskStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED";
}

const TaskTable: React.FC<{}> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(
          "http://localhost:8080/api/task/get-current-user-tasks",
          {
            method: "GET", // Specify the GET method
            headers: {
              Authorization: `Bearer ${token}`, // Add the token here
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data: Task[] = await response.json();
        setTasks(data);
        setFilteredTasks(data); // Initialize filteredTasks with all tasks
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="tabular--wrapper p-6 bg-gray-100 rounded-md shadow-lg">
      <h3 className="main--title text-xl font-bold text-gray-700 mb-4">
        Recently Added Tasks
      </h3>
      <div className="table-container overflow-x-auto bg-white rounded-md shadow-md">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Title
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Deadline
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Priority Level
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Status
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          {loading ? (
            <div id="spinner" className="spinner">
              <i className="fas fa-spinner fa-spin"></i> Loading...
            </div>
          ) : error ? (
            <div className="error-message">Error: {error}</div>
          ) : (
            <tbody>
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="px-4 py-2 border border-gray-300">
                      {task.taskName}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {task.taskDescription}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {task.deadline}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-red-500 font-bold">
                      {task.priority}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-green-600 font-semibold">
                      {task.taskStatus}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
