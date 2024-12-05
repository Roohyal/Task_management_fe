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
                  <th>Title</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Priority Level</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.deadline}</td>
                      <td>{task.priority}</td>
                      <td>{task.status}</td>
                      <td>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>No tasks available</td>
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