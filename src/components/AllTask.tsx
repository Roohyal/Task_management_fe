import React, { useState, useEffect } from "react";

interface Task {
  title: string;
  description: string;
  deadline: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
}

const AllTask: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // States for filtering and searching
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://your-api-endpoint.com/tasks");

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

  // Handle filtering logic
  useEffect(() => {
    let updatedTasks = tasks;

    if (searchQuery) {
      updatedTasks = updatedTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priorityFilter) {
      updatedTasks = updatedTasks.filter((task) => task.priority === priorityFilter);
    }

    if (statusFilter) {
      updatedTasks = updatedTasks.filter((task) => task.status === statusFilter);
    }

    setFilteredTasks(updatedTasks);
  }, [searchQuery, priorityFilter, statusFilter, tasks]);

  return (
    <div className="main-table-container">
      {loading ? (
        <div id="spinner" className="spinner">
          <i className="fas fa-spinner fa-spin"></i> Loading...
        </div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <div className="table-container p-6 bg-gray-100 rounded-md shadow-lg">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Task List</h3>

          {/* Search and Filter Section */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex space-x-4">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Filter by Priority</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Filter by Status</option>
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </div>
          </div>

          {/* Task Table */}
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white rounded-md">
            <thead className="bg-blue-200">
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Title</th>
                <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Description</th>
                <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Deadline</th>
                <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Priority</th>
                <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Status</th>
                <th className="px-4 py-2 border border-gray-300 text-center text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="px-4 py-2 border border-gray-300">{task.title}</td>
                    <td className="px-4 py-2 border border-gray-300">{task.description}</td>
                    <td className="px-4 py-2 border border-gray-300">{task.deadline}</td>
                    <td className="px-4 py-2 border border-gray-300 text-red-500 font-bold">{task.priority}</td>
                    <td className="px-4 py-2 border border-gray-300 text-green-600 font-semibold">{task.status}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">Edit</button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTask;
