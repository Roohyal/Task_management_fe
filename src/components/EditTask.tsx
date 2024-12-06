
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

interface TaskFormData {
  taskName: string;
  taskDescription: string;
  deadline: string;
  priority: Priority;
  status: Status;
}

const EditTask: React.FC =() =>{
  const { taskId } = useParams<{ taskId: string }>(); // Get task ID from URL
  const [formData, setFormData] = useState<TaskFormData>({
    taskName: "",
    taskDescription: "",
    deadline: "",
    priority: "LOW",
    status: "PENDING",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  // Fetch task details on component load
  useEffect(() => {
    const fetchTaskDetails = async () => {
      if (!taskId) return;
      try {
        const response = await fetch(`http://localhost:8080/api/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const task = await response.json();
          setFormData({
            taskName: task.taskName,
            taskDescription: task.taskDescription,
            deadline: task.deadline,
            priority: task.priority,
            status: task.status,
          });
        } else {
          alert("Failed to fetch task details.");
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTaskDetails();
  }, [taskId, token]);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit updated task
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/api/task/update-task?id=${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Task updated successfully!");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update task.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Edit Task</h2>
          <form id="editTaskForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="edit-title"
                name="title"
                value={formData.taskName}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="edit-description"
                name="description"
                value={formData.taskDescription}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edit-deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
              <input
                type="date"
                id="edit-deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edit-priority" className="block text-sm font-medium text-gray-700">Priority Level</label>
              <select
                id="edit-priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>
  
            <div className="mb-6">
              <label htmlFor="edit-status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="edit-status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </div>
  
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? (
                <span className="flex justify-center">
                  <i className="fa fa-spinner fa-spin mr-2"></i>
                  Updating Task...
                </span>
              ) : (
                'Update Task'
              )}
            </button>
          </form>
        </div>
      </div>
    );
}
export default EditTask;