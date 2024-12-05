import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashBoardPage from "./pages/DashBoardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashBoardPage />,
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
        ],
      },
    ]);