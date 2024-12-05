
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TaskOverview: React.FC = () => {
  return (
    <div className="card">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Pending Task Card */}
    <div className="status--card bg-red-100 text-red-700 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4">
        <div className="icon text-4xl">
          <i className="fas fa-tasks"></i>
        </div>
        <div className="status">
          <span className="status--value text-xl font-semibold">PENDING</span>
          <span className="title block text-sm">Tasks</span>
        </div>
      </div>
      <div className="text-3xl font-bold mt-4" id="pending-count">0</div>
      <span className="card-detail text-sm italic mt-2">"Keep moving forward."</span>
    </div>

    {/* Completed Task Card */}
    <div className="status--card bg-green-100 text-green-700 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4">
        <div className="icon text-4xl">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="status">
          <span className="status--value text-xl font-semibold">COMPLETED</span>
          <span className="title block text-sm">Tasks</span>
        </div>
      </div>
      <div className="text-3xl font-bold mt-4" id="completed-count">0</div>
      <span className="card-detail text-sm italic mt-2">"Well done is better than well said."</span>
    </div>

    {/* In-progress Task Card */}
    <div className="status--card bg-blue-100 text-blue-700 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4">
        <div className="icon text-4xl">
          <i className="fas fa-spinner"></i>
        </div>
        <div className="status">
          <span className="status--value text-xl font-semibold">IN-PROGRESS</span>
          <span className="title block text-sm">Tasks</span>
        </div>
      </div>
      <div className="text-3xl font-bold mt-4" id="in-progress-count">0</div>
      <span className="card-detail text-sm italic mt-2">"Believe you can."</span>
    </div>

    {/* Custom Fourth Card */}
    <div className="status--card bg-purple-100 text-purple-700 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4">
        <div className="icon text-4xl">
          <i className="fas fa-bell"></i>
        </div>
        <div className="status">
          <span className="status--value text-xl font-semibold">Total </span>
          <span className="title block text-sm">Tasks</span>
        </div>
      </div>
      <div className="text-3xl font-bold mt-4">0</div>
      <span className="card-detail text-sm italic mt-2">"Stay consistent."</span>
    </div>
  </div>
</div>

  );
};

export default TaskOverview;
