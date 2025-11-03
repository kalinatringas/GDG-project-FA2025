import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import './App.css'
import Profile from "./components/Profile";
import Navbar from "./NavBar";
import BarterApp from "./BarterApp";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/trade" element={<BarterApp/>}/>
      </Routes>
    </div>
  )
}

export default App
