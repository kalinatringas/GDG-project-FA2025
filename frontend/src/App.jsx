import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  )
}

export default App
