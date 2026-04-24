import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  BarChart3,
  Settings
} from "lucide-react";

const SideBar = () => {
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <Briefcase size={18} />
            Applications
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <PlusCircle size={18} />
            Add Application
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            <BarChart3 size={18} />
            Analytics
          </NavLink>

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

      {/* Bottom Profile Section */}
      <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-semibold">
          H
        </div>
        <div>
          <p className="text-sm font-medium">Himanshu</p>
          <p className="text-xs text-gray-400">Frontend Dev</p>
        </div>
      </div>

    </div>
  );
};

export default SideBar;