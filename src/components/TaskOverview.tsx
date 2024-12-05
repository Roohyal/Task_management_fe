// components/TaskOverview.tsx
import React from "react";

const TaskOverview: React.FC = () => {
  return (
    <div className="card">
      <h3 className="main--title">Task Overview</h3>
      <div className="card--container">
        <div className="card--wrapper">
          {/* Pending Task Card */}
          <div className="status--card light-red">
            <div className="card--header">
              <i className="fas icon dark-red" id="pending-count">0</i>
              <div className="status">
                <span className="status--value">PENDING</span>
                <span className="title"> Task </span>
              </div>
              <span className="card-detail">"Keep moving forward."</span>
            </div>
          </div>

          {/* Completed Task Card */}
          <div className="status--card light-green">
            <div className="card--header">
              <i className="fas icon dark-green" id="completed-count">0</i>
              <div className="status">
                <span className="status--value">COMPLETED</span>
                <span className="title"> Task </span>
              </div>
              <span className="card-detail">"Well done is better than well said."</span>
            </div>
          </div>

          {/* In-progress Task Card */}
          <div className="status--card light-blue">
            <div className="card--header">
              <i className="fas icon dark-blue" id="in-progress-count">0</i>
              <div className="status">
                <span className="status--value">IN-PROGRESS</span>
                <span className="title"> Task </span>
              </div>
              <span className="card-detail">"Believe you can."</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
