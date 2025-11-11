import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import './App.css'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path= "/profile" element = {<Profile/>}/>
          <Route path=""/>
        </Routes>
      <Footer/>  
    </div>
  )
}

export default App
