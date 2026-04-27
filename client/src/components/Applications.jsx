import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const stored = JSON.parse(localStorage.getItem("applications")) || [];
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // 🔍 Filter by position only
  const filteredApplications = stored.filter((item) =>
    item.position?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="h-16 fixed top-0 left-64 right-0 bg-white shadow-sm px-8 flex items-center justify-between z-50">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="text-gray-600 text-xl cursor-pointer">
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
              placeholder="Search by position..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-80 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("settings")}
          >
            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
              H
            </div>
            <h2 className="text-sm font-semibold text-gray-700">
              Himanshu
            </h2>
          </div>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="ml-64 mt-16 bg-gray-50 min-h-screen p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Applications
        </h1>

        {/* If no results */}
        {filteredApplications.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No applications found for this position.
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((items) => (
            <div
              key={items.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 
                         hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {/* Company */}
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {items.company}
              </h2>

              {/* Details */}
              <div className="space-y-2 text-sm text-gray-600">

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Position
                  </span>
                  <span>{items.position}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Salary
                  </span>
                  <span>
                    {items.currency} {items.salary}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Job Type
                  </span>
                  <span>{items.type}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Location
                  </span>
                  <span>{items.location}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">
                    Status
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
                    {items.status}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Applications;