import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  return (
    <nav className=" h-16 fixed top-0 left-64 right-0 bg-white shadow-sm px-8 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-6">
        
        {/* Menu Icon Placeholder */}
        <div className="text-gray-600 text-xl cursor-pointer ">
          ☰
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          />
          <input
            type="text"
            placeholder="Search applications, companies..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              navigate("applications")}}
            className="w-80 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
            H
          </div>
          <h2 className="text-sm font-semibold text-gray-700">
            Himanshu
          </h2>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;