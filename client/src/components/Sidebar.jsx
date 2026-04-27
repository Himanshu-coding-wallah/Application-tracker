import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  BarChart3,
  Settings,
  ChevronDown
} from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const linkStyle =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 text-gray-300 hover:bg-slate-800 hover:text-white";

  const activeStyle = "bg-indigo-600 text-white";

  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col justify-between p-6">

      <div>
        <h2 className="text-xl font-semibold mb-10 tracking-wide">
          AppTracker
        </h2>

        <nav className="flex flex-col gap-2">

          {/* Dashboard */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          {/* Applications with Dropdown */}
          <div>
            <div
              className={`${linkStyle} cursor-pointer justify-between`}
            >
              <div className="flex items-center gap-3" onClick={()=>(navigate("applications"))}>
                <Briefcase size={18}  />
                Applications
              </div>

              <ChevronDown
                size={16}
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <NavLink
                to="/applications"
                className={({ isActive }) =>
                  `ml-8 block px-4 py-2 text-sm rounded-lg ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-400 hover:bg-slate-700 hover:text-white"
                  }`
                }
              >
                All Applications
              </NavLink>

              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `ml-8 block px-4 py-2 text-sm rounded-lg ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-400 hover:bg-slate-700 hover:text-white"
                  }`
                }
              >
                History
              </NavLink>
            </div>
          </div>

          {/* Add Application */}
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <PlusCircle size={18} />
            Add Application
          </NavLink>

          {/* Analytics */}
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <BarChart3 size={18} />
            Analytics
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

        </nav>
      </div>

      {/* Bottom Profile */}
      <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg" >
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-semibold cursor-pointer" onClick={()=>navigate("settings")}>
          H
        </div>
        <div onClick={()=>navigate("settings")} className="cursor-pointer">
          <p className="text-sm font-medium">Himanshu</p>
          <p className="text-xs text-gray-400">Frontend Dev</p>
        </div>
      </div>

    </div>
  );
};

export default SideBar;