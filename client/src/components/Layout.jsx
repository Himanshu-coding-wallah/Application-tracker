import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="flex">
        <SideBar />
        <div className="w-full">
            <Navbar />        
        <Outlet />
        </div>
    </div>
  )
}

export default Layout