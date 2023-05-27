import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Cityselection from "./pages/Cityselection"
import Selectseats from "./pages/Selectseats"
import Cart from "./pages/Cart"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cityselection" element={<Cityselection />} />
        <Route path="/selectseats" element={<Selectseats />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
