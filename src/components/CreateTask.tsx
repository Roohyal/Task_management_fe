import React, { useState } from 'react';


type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

interface TaskFormData {
  title: string;
  description: string;
  deadline: string;
  priority: Priority;
  status: Status;
}
const CreateTask: React.FC = () => {

    const [formData, setFormData] = useState<TaskFormData>({
        title: '',
        description: '',
        deadline: '',
        priority: 'LOW',
        status: 'PENDING',
      });
    
      const [loading, setLoading] = useState(false);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
          alert('Task Created!');
          setLoading(false);
        }, 2000);
      };

    return(
     
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Create a New Task</h2>
          <form id="createTaskForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority Level</label>
              <select
                id="priority"
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
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                disabled
                className="w-full mt-1 p-2 bg-gray-200 border border-gray-300 rounded-md"
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
                  Creating Task...
                </span>
              ) : (
                'Create Task'
              )}
            </button>
          </form>
        </div>
      </div>
    );
  };
   export default CreateTask;