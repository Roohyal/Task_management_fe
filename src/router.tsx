import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashBoardLayout, { DashboardDefault } from "./layout/DashboardLayout";
import Profile from "./components/Profile";
import Navbar from "./components/NavBar";
import CompletedTask from "./components/CompletedTask";
import AllTask from "./components/AllTask";
import TaskTable from "./components/TaskTable";
import TaskOverview from "./components/TaskOverview";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";

export const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard", // Ensure the path is lowercase and consistent
        element: <DashBoardLayout />, // Use the imported DashBoard component
        children: [
          {
            index: true,
            element: <DashboardDefault />,
          },

          {
            path: "add-task",
            element: <CreateTask />,
          },
          {
            path: "all-task",
            element: <AllTask />,
          },

          {
            path: "completed-task",
            element: <CompletedTask />,
          },
          {
            path: "profile",
            element: <Profile />,
          },

          {
            path: "edit",
            element: <EditTask />,
          },
    
        ],
      },
      
      
    ],
  },
]);
