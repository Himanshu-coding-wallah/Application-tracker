import React, { useEffect, useState } from 'react'
import {
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  Search, 
  Plus, 
  PlusIcon,
  GlobeOff
} from "lucide-react";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate()
    let [data, setData] = useState([])
    let [total, setTotal] = useState(0)
    const statusCounts = data.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1
        return acc
    }, {})

    total = data.length
    
    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem("applications"))
        setData(storedData || [])
    }, [])
   

  return (
    <>
    <div className='ml-64 mt-16 bg-gray-50 p-8'>
        {/* ========= first section ======== */}
        <div className="mb-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                Dashboard
                </h1>
                <p className="mt-1 text-gray-500">
                Track and manage your job applications
                </p>
            </div>

        <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <p className="text-sm text-gray-500">
                        Total Applications
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {total}
                    </h2>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <Briefcase size={22} />
                    </div>
                </div>
                <p className="text-sm text-green-600">
                    +12% from last month
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <p className="text-sm text-gray-500">
                        Interviews
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {statusCounts.Interview || 0}

                    </h2>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                    <Clock size={22} />
                    </div>
                </div>

                <p className="text-sm text-green-600">
                    +5% from last month
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <p className="text-sm text-gray-500">
                    Offers
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800">
                    {statusCounts.Offer || 0}

                    </h2>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <CheckCircle size={22} />
                    </div>
                </div>

                <p className="text-sm text-green-600">
                    +2% from last month
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <p className="text-sm text-gray-500">
                        Rejected
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800">
                    {statusCounts.Rejected || 0}

                    </h2>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <XCircle size={22} />
                    </div>
                </div>

                <p className="text-sm text-red-600">
                    -3% from last month
                </p>
            </div>
        </div>
        </div>

        {/* ======= second section ======== */}
        <div>
            {/* first */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                    Applications Overview
                </h3>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search applications..."
                            className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                    onClick={()=>(navigate("add"))}>
                    <Plus size={16} />
                    Add Application
                    </button>
                </div>
            </div>

            {/* second */}
            <div className='grid grid-cols-5 gap-3'>
                {/* applied section */}
                <div className="bg-white rounded-xl shadow-sm p-4 h-80 flex flex-col  ">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex  items-center gap-2 ">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <p className="text-sm font-semibold text-gray-700">
                                Applied
                            </p>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center justify-center">
                        {statusCounts.Applied || 0}
                        </div>
                    </div>
                    <div className='no-scrollbar overflow-auto'>
                        {data.filter(item => item.status === "Applied")
                        .map((item, index) => (
                            <div
                            key={index}
                            className="bg-white p-4 mb-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                            >
                            {/* Top Section */}
                            <div className="flex items-start gap-3">

                                {/* Company Avatar */}
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                                {item.company?.charAt(0).toUpperCase()}
                                </div>

                                {/* Job Info */}
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        {item.company}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.position}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                                        {item.type}
                                        </span>

                                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                        {item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* interview section */}
                <div className="bg-white rounded-xl shadow-sm p-4 h-80 flex flex-col ">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <p className="text-sm font-semibold text-gray-700">
                                Interview
                            </p>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center justify-center">
                        {statusCounts.Interview || 0}
                        </div>
                    </div>
                    <div className='no-scrollbar overflow-auto'>
                        {data.filter(item => item.status === "Interview")
                        .map((item, index) => (
                            <div
                            key={index}
                            className="bg-white p-4 mb-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                            >
                            {/* Top Section */}
                            <div className="flex items-start gap-3">

                                {/* Company Avatar */}
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                                {item.company?.charAt(0).toUpperCase()}
                                </div>

                                {/* Job Info */}
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        {item.company}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.position}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                                        {item.type}
                                        </span>

                                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                        {item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* pending section  */}
                <div className="bg-white rounded-xl shadow-sm p-4 h-80 flex flex-col  ">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <p className="text-sm font-semibold text-gray-700">
                                Pending
                            </p>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center justify-center">
                        {statusCounts.Pending || 0}
                        </div>
                    </div>
                    <div className='no-scrollbar overflow-auto'>
                        {data.filter(item => item.status === "Pending")
                        .map((item, index) => (
                            <div
                            key={index}
                            className="bg-white p-4 mb-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                            >
                            {/* Top Section */}
                            <div className="flex items-start gap-3">

                                {/* Company Avatar */}
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                                {item.company?.charAt(0).toUpperCase()}
                                </div>

                                {/* Job Info */}
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        {item.company}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.position}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                                        {item.type}
                                        </span>

                                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                        {item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* rejected section  */}
                <div className="bg-white rounded-xl shadow-sm p-4 h-80 flex flex-col ">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <p className="text-sm font-semibold text-gray-700">
                                Rejected
                            </p>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center justify-center">
                        {statusCounts.Rejected || 0}
                        </div>
                    </div>
                    <div className='no-scrollbar overflow-auto'>
                        {data.filter(item => item.status === "Rejected")
                        .map((item, index) => (
                            <div
                            key={index}
                            className="bg-white p-4 mb-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                            >
                            {/* Top Section */}
                            <div className="flex items-start gap-3">

                                {/* Company Avatar */}
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                                {item.company?.charAt(0).toUpperCase()}
                                </div>

                                {/* Job Info */}
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        {item.company}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.position}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                                        {item.type}
                                        </span>

                                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                        {item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* offer section  */}
                <div className="bg-white rounded-xl shadow-sm p-4 h-80 flex flex-col ">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <p className="text-sm font-semibold text-gray-700">
                                Offer
                            </p>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center justify-center">
                        {statusCounts.Offer || 0}
                        </div>
                    </div>
                    <div className='no-scrollbar overflow-auto'>
                        {data.filter(item => item.status === "Offer")
                        .map((item, index) => (
                            <div
                            key={index}
                            className="bg-white p-4 mb-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                            >
                            {/* Top Section */}
                            <div className="flex items-start gap-3">

                                {/* Company Avatar */}
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                                {item.company?.charAt(0).toUpperCase()}
                                </div>

                                {/* Job Info */}
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        {item.company}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.position}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                                        {item.type}
                                        </span>

                                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                                        {item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* ======== third section ======== */}
        {/* <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div> */}
    </div>

    </>
  )
}

export default Dashboard