import { BrowserRouter } from "react-router-dom"
import SideBar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"


function App(){
  return( 
  <>
    <BrowserRouter>
      <div className="flex">
        <div>
          <SideBar/>
        </div>
        <div className="w-full">
          <Navbar/>
          <Dashboard/>
        </div>
      </div>
    </BrowserRouter>
  </>
  )
}

export default App