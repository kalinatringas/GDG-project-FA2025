import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import './App.css'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer/>  
    </div>
  )
}

export default App
