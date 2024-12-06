import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token"); // Adjust token retrieval as per your app logic

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
          throw new Error("Failed to fetch profile data.");
        }

        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-500 p-6 text-white">
          <h2 className="text-2xl font-bold text-center">Profile</h2>
        </div>

        {/* Profile Body */}
        <div className="p-6">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : profile ? (
            <>
              {/* First Name */}
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-user text-blue-500 text-lg"></i>
                <span className="text-gray-700 font-medium">
                  First Name: {profile.firstName}
                </span>
              </div>

              {/* Last Name */}
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-user text-blue-500 text-lg"></i>
                <span className="text-gray-700 font-medium">
                  Last Name: {profile.lastName}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-envelope text-blue-500 text-lg"></i>
                <span className="text-gray-700 font-medium">
                  Email: {profile.email}
                </span>
              </div>
            </>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>

        {/* Profile Footer */}
        <div className="bg-gray-100 p-4 text-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Link to="/dashboard/update">Edit Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
