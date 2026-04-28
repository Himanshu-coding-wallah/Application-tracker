import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Mail, User } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  // You can later fetch this from backend or context
  const user = {
    name: "Himanshu",
    email: "himanshu@gmail.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // if you are using auth
    navigate("/"); // redirect to home or login
  };

  return (
    <div className="ml-64 mt-16 min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-gray-100">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Account Settings
        </h1>

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-indigo-600 text-white 
                          flex items-center justify-center text-3xl font-semibold shadow-md">
            {user.name.charAt(0)}
          </div>

          <h2 className="mt-4 text-lg font-semibold text-gray-800">
            {user.name}
          </h2>

          <p className="text-sm text-gray-500">
            {user.email}
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-4 mb-8">

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <User size={18} className="text-indigo-600" />
            <div>
              <p className="text-xs text-gray-500">Username</p>
              <p className="text-sm font-medium text-gray-800">
                {user.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <Mail size={18} className="text-indigo-600" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-800">
                {user.email}
              </p>
            </div>
          </div>

        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 
                     bg-red-500 text-white py-3 rounded-lg 
                     hover:bg-red-600 transition-all duration-200 font-medium shadow-sm"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>
  );
};

export default Settings;