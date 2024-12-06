# TASK IT

## Task Management Application

A task management application designed to allow users to create, view, edit, and delete tasks. The app allows filtering of tasks by priority, status, and search queries. Users can manage their tasks efficiently while keeping track of deadlines and statuses.

## Features

- **Task List View**: Displays all tasks with details like task name, description, priority, status, and deadline.
- **Search**: Filter tasks by task name, priority, and status.
- **Task Deletion**: Confirm and delete tasks from the list.
- **Filter by Priority & Status**: Filter tasks based on their priority (Low, Medium, High) and status (Pending, In Progress, Completed).
- **Authentication**: Secure login with token-based authentication.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: For running the frontend application.
- **Java**: For the backend API.
- **Spring Boot**: Backend framework used.
- **Postman** or any API testing tool for testing endpoints.
- **MongoDB** (or your preferred database) for data storage.

## Setup

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app


2. Install dependencies:
  npm install

3. Run the application:
./mvnw clean install


### 3. `environment-variables.md`

```markdown
# Environment Variables

Make sure to set the following environment variables for the backend:

- **DATABASE_URL**: The connection string for your database.
- **EMAIL PASSWORD**: Secret key for JWT token generation.


# Usage

- **Login**: Use the login form to authenticate. The backend will generate a JWT token, which will be stored locally.
- **View Tasks**: Once logged in, you can view your tasks, filter them by priority, status, and search by task name.
- **Delete Task**: Click on the "Delete" button next to any task. A confirmation dialog will appear before deletion.
- **Filter Tasks**: Use the filters to sort tasks by their status (Pending, In Progress, Completed) or priority (Low, Medium, High).


# API Endpoints

- **GET /api/task/get-current-user-tasks**: Get all tasks for the current user.
- **DELETE /api/task/delete?id={taskId}**: Delete a task by its ID.
- **POST /api/task/create
- **PUT api/task/update-task



# Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Java, Spring Boot, Postgres
- **Authentication**: JWT Token
- **Build Tools**: Maven (Backend), npm (Frontend)

# Contributing

Feel free to fork the repository, make changes, and submit pull requests. Ensure to follow best practices and write tests for new features.

### Steps to Contribute

1. Fork the repository and clone it to your local machine.
2. Create a new branch.
3. Make your changes.
4. Push the changes to your forked repository.
5. Open a pull request for review.

