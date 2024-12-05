import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashBoardPage from "./pages/DashBoardPage";
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
        element: <EditTask />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "dashboard", // Ensure the path is lowercase and consistent
            element: <DashBoardPage />, // Use the imported DashBoard component
          },
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "nav",
            element: <Navbar />
          },
          {
            path: "completedTask",
            element: <CompletedTask />
          },
          {
           path: "allTask",
           element: <AllTask />
          },
          {
            path:"table",
            element: <TaskTable />
          },
          {
            path: "overview",
            element: <TaskOverview />
          },
          {
            path: "create",
            element: <CreateTask />
          },
          {
            path: "edit",
            element: <EditTask />
          }
         

        ],
      },
    ]);