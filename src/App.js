import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Home />} />

        {/* หน้ารายละเอียดหนัง */}
        <Route path="/movie/:id" element={<Detail />} />

        {/* หน้าFav */}
        <Route path="/favorites" element={<Favorites />} />

        {/* route 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
