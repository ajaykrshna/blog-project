import React from "react";
import Navbar from "./components/Navbar";
import Projects from './pages/Projects';
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
