import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import TableView from "./pages/TableView"
import Home from "./pages/Home"
function App() {

  return (
    <>
      <Router>
        <Routes>
<Route path="/Login" element={<Login />} />

<Route path="/Dashboard" element={<Dashboard />} />

<Route path="/TableView" element={<TableView />} />

<Route path="/Home" element={<Home />} />

        </Routes>
      </Router>
    </>
  )
}
export default App



