import React from "react";

interface ProfileProps {
  name: string;
  email: string;
  phone: string;
}


const Profile: React.FC = () => {


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-blue-500 p-6 text-white">
              <h2 className="text-2xl font-bold text-center">Profile</h2>
            </div>
    
            {/* Profile Body */}
            <div className="p-6">
              {/* FirstName */}
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-user text-blue-500 text-lg"></i>
                <span className="text-gray-700 font-medium">name</span>
              </div>

              {/* LastName */}
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-user text-blue-500 text-lg"></i>
                <span className="text-gray-700 font-medium">lastname</span>
              </div>
    
              {/* Email */}
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-envelope text-blue-500 text-lg"></i>
                <span className="text-gray-700 font-medium">email</span>
              </div>
            </div>
    
            {/* Profile Footer */}
            <div className="bg-gray-100 p-4 text-center">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
    );
}
export default Profile;