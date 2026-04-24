import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideBar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import AddApplication from "./components/AddApplication"
import Layout from "./components/Layout"

function App(){
  return( 
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddApplication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App