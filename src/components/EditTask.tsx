
import React, { useState } from 'react';

type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

// interface TaskFormData {
//   title: string;
//   description: string;
//   deadline: string;
//   priority: Priority;
//   status: Status;
// }
const EditTask: React.FC =() =>{

   const [formData, setFormData] = useState<any>("");
   const [loading, setLoading] = useState<any>("");
  

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate task update process
        setTimeout(() => {
          //onSubmit(formData);
          setLoading(false);
        }, 2000);
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
                value={formData.title}
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
                value={formData.description}
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