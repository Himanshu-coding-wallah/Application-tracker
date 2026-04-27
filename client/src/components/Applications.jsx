import React from 'react'

const Applications = () => {
  const stored = JSON.parse(localStorage.getItem("applications")) || []

  return (
    <div className="ml-64 mt-16 bg-gray-50 min-h-screen p-8">
      
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Applications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stored.map((items) => (
          <div
            key={items.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            {/* Company Name */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {items.company}
            </h2>

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Position</span>
                <span>{items.position}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Salary</span>
                <span>{items.currency} {items.salary}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Job Type</span>
                <span>{items.type}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Location</span>
                <span>{items.location}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Status</span>
                <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
                  {items.status}
                </span>
              </div>
            </div>

            {/* Delete Button */}
            {/* <div className="mt-6 flex justify-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm 
                                 hover:bg-red-900 transition">
                Delete
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Applications