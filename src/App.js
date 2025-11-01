import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import introPhoto from "./pic/photo.jpg";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <div className="intro-screen">
        <img src={introPhoto} alt="Intro" className="intro-image" />
        <button className="enter-button" onClick={() => setShowIntro(false)}>
          เข้าสู่เว็บไซต์
        </button>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
