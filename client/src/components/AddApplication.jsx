import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AddApplication = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    id: Date.now(),
    company: "",
    position: "",
    type: "",
    currency: "INR",
    salary: "",
    location: "",
    status: ""
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const oldData = JSON.parse(localStorage.getItem("applications")) || []

    const updatedData = [...oldData, formData]

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedData)
    )

    navigate("/")
  }

  return (
    <div className="ml-64 min-h-screen bg-gray-100 flex  items-center justify-center pt-16">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2">
          Add Application
        </h1>
        <p className="text-gray-500 mb-6">
          Track a new job opportunity
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company Name"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>

          <div className="flex gap-3">
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="">₹ Choose</option>
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
              <option value="GBP">£ GBP</option>
            </select>

            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">Status</option>
            <option value="Applied">Applied</option>
            <option value="Pending">Pending</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Add Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddApplication