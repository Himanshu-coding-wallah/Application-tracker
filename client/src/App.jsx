import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideBar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import AddApplication from "./components/AddApplication"
import Layout from "./components/Layout"
import Applications from "./components/Applications"
import History from "./components/History"

function App(){
  return( 
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddApplication />} />
          <Route path="applications" element={<Applications />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App