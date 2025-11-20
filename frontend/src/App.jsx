import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import './App.css'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import ItemDetailPage from "./ItemDetailPage/ItemDetailPage";
import Footer from "./components/footer/Footer";
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/items/:itemId" element={<ItemDetailPage />} />
        </Routes>
      <Footer/>  
    </div>
  )
}

export default App
