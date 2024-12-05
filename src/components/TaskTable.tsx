// components/TaskTable.tsx
import React from "react";

interface Task {
  title: string;
  description: string;
  deadline: string;
  priority: string;
  status: string;
}

const TaskTable: React.FC<{ }> = () => {
  return (
    <div className="tabular--wrapper">
      <h3 className="main--title">Recently Added Tasks</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Priority Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {tasks.map((task, index) => ( */}
              <tr>
                <td>nothing</td>
                <td>all i want</td>
                <td>today</td>
                <td>High</td>
                <td>Completed</td>
                <td>
                  {/* Add action buttons here */}
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
