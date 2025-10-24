import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import './App.css'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Trading from "./components/Trading";


function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path= "/profile" element = {<Profile/>}/>
          <Route path= "/trading" element = {<Trading/>}/>
        </Routes>
       
      </div>
  )
}

export default App
