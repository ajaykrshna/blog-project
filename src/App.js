import React from "react";
import Navbar from "./components/Navbar";
import About from './pages/About';
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
