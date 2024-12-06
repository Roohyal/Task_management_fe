import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TaskOverview: React.FC = () => {
  const [taskSummary, setTaskSummary] = useState({
    pending: 0,
    completed: 0,
    inProgress: 0,
    totalTasks: 0,
  });

  useEffect(() => {
    const fetchTaskSummary = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage

        const response = await fetch("http://localhost:8080/api/task/task-summary", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch task summary");
        }

        const data = await response.json();
        console.log(data); // Debugging: check the console output to see if data is correct

        // Directly set the task summary state
        setTaskSummary({
          pending: data.pending,
          completed: data.completed,
          inProgress: data.inProgress,
          totalTasks: data.totalTasks,
        });
      } catch (error) {
        console.error("Error fetching task summary:", error);
      }
    };

    fetchTaskSummary();
  }, []);

  return (
    <div className="card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {/* Pending Task Card */}
        <div className="status--card bg-red-100 text-red-700 rounded-lg shadow-lg p-6 w-80">
          <div className="flex items-center gap-4">
            <div className="icon text-4xl">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="status">
              <span className="status--value text-xl font-semibold">PENDING</span>
              <span className="title block text-sm">Tasks</span>
            </div>
          </div>
          <div className="text-3xl font-bold mt-4" id="pending-count">{taskSummary.pending}</div>
          <span className="card-detail text-sm italic mt-2">"Keep moving forward."</span>
        </div>

        {/* Completed Task Card */}
        <div className="status--card bg-green-100 text-green-700 rounded-lg shadow-lg p-6 w-80">
          <div className="flex items-center gap-4">
            <div className="icon text-4xl">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="status">
              <span className="status--value text-xl font-semibold">COMPLETED</span>
              <span className="title block text-sm">Tasks</span>
            </div>
          </div>
          <div className="text-3xl font-bold mt-4" id="completed-count">{taskSummary.completed}</div>
          <span className="card-detail text-sm italic mt-2">"Well done is better than well said."</span>
        </div>

        {/* In-progress Task Card */}
        <div className="status--card bg-blue-100 text-blue-700 rounded-lg shadow-lg p-6 w-80">
          <div className="flex items-center gap-4">
            <div className="icon text-4xl">
              <i className="fas fa-spinner"></i>
            </div>
            <div className="status">
              <span className="status--value text-xl font-semibold">IN-PROGRESS</span>
              <span className="title block text-sm">Tasks</span>
            </div>
          </div>
          <div className="text-3xl font-bold mt-4" id="in-progress-count">{taskSummary.inProgress}</div>
          <span className="card-detail text-sm italic mt-2">"Believe you can."</span>
        </div>

        {/* Total Task Card */}
        <div className="status--card bg-purple-100 text-purple-700 rounded-lg shadow-lg p-6 w-80">
          <div className="flex items-center gap-4">
            <div className="icon text-4xl">
              <i className="fas fa-bell"></i>
            </div>
            <div className="status">
              <span className="status--value text-xl font-semibold">Total</span>
              <span className="title block text-sm">Tasks</span>
            </div>
          </div>
          <div className="text-3xl font-bold mt-4" id="total-count">{taskSummary.totalTasks}</div>
          <span className="card-detail text-sm italic mt-2">"Stay consistent."</span>
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
