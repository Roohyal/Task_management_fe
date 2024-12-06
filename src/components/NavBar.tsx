import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("User"); // Default fallback name
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); // Adjust token retrieval if necessary

      if (!token) {
        setError("Authentication token not found.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/person/get-user", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }

        const data = await response.json();
        setFirstName(data.firstName); // Assuming the endpoint returns a `firstName` field
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="navbar flex justify-between items-center bg-blue-100 p-4 shadow-md z-50">
      {/* Welcome Message */}
      <span className="text-xl font-semibold">
        Welcome, <span className="text-blue-500">{firstName}</span>
      </span>

      {/* Profile Icon */}
      <Link to="/dashboard/profile" className="text-2xl text-gray-700 hover:text-blue-500">
        <i className="fas fa-user-circle"></i>
      </Link>
    </div>
  );
};

export default Navbar;
