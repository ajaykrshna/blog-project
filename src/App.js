import React from "react";
import Navbar from "./components/Navbar";
import Blog from './pages/Blog';
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
