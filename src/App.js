import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Blog from './pages/Blog';
import NewsletterPage from './pages/NewsletterPage';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/newsletter' element={<NewsletterPage />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
