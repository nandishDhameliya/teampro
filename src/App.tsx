import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Navbar from "./components/navbar/nav";
import TeaCollections from "./components/pages/teaCollections";
import Accessories from "./components/pages/accessories";
import Blog from "./components/pages/blog";
import Support from "./components/pages/support";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teaCollections" element={<TeaCollections />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
