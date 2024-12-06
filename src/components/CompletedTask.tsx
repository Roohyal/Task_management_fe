import React, { useState, useEffect } from 'react';

interface Task {
  title: string;
  description: string;
  deadline: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}

const CompletedTask: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const token = localStorage.getItem("token");
  
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          // Replace with your actual API endpoint
          const response = await fetch(
            "http://localhost:8080/api/task/get-completed-tasks",
            {
              method: "GET", // Specify the GET method
              headers: {
                Authorization: `Bearer ${token}`, // Add the token here
              },
            }
          );
          // Handle errors
          if (!response.ok) {
            throw new Error('Failed to fetch tasks');
          }
  
          const data: Task[] = await response.json();
          setTasks(data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTasks();
    }, []);
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

            <h3 className="text-xl font-bold text-gray-700 mb-4"> Completed Task List</h3>


            <table id="taskTable" className="table-auto w-full border-collapse border border-gray-300 bg-white rounded-md">
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
                  Priority
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                  Status
                </th>
                <th className="px-4 py-2 border border-gray-300 text-center text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                       <td className="px-4 py-2 border border-gray-300">{task.title}</td>
                       <td className="px-4 py-2 border border-gray-300">{task.description}</td>
                       <td className="px-4 py-2 border border-gray-300">{task.deadline}</td>
                       <td className="px-4 py-2 border border-gray-300 text-red-500 font-bold">{task.priority}</td>
                       <td className="px-4 py-2 border border-gray-300 text-green-600 font-semibold">{task.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-4 py-4 text-center text-gray-500">No tasks available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}
export default CompletedTask;