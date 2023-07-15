import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Blog from './pages/Blog';
import NewsletterPage from './pages/NewsletterPage';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from "./components/Footer";
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className={darkMode ? "Appdark" : "Applight"}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home darkMode={darkMode} />} />
            <Route exact path='/blog' element={<Blog darkMode={darkMode} />} />
            <Route exact path='/newsletter' element={<NewsletterPage darkMode={darkMode} />} />
            <Route exact path='/projects' element={<Projects darkMode={darkMode} />} />
            <Route exact path='/about' element={<About darkMode={darkMode} />} />
          </Routes>
        </div>
      </Router>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
