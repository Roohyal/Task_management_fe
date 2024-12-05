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
  
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          // Replace with your actual API endpoint
          const response = await fetch('https://your-api-endpoint.com/tasks');
          
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
          <div className="table-container">
            <table id="taskTable">
              <thead>
              <tr>
        <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Title</th>
        <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Description</th>
        <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Deadline</th>
        <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Priority Level</th>
        <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">Status</th>
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