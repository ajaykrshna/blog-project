import React from "react";
import Navbar from "./components/Navbar";
import NewsletterPage from './pages/NewsletterPage';
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsletterPage />
      <Footer />
    </div>
  );
}

export default App;
