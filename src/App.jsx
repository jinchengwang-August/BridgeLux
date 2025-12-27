import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import SearchOverlay from "./components/SearchOverlay.jsx";
import VerticalProgressNav from "./components/VerticalProgressNav.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Businesses from "./pages/Businesses.jsx";
import Sustainability from "./pages/Sustainability.jsx";
import News from "./pages/News.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 顶部光斑 */}
      <div className="pointer-events-none fixed inset-x-0 top-0 flex justify-center">
        <div className="glow-orb h-40 w-72 bg-sky-300/40" />
      </div>

      <Navbar onSearchClick={() => setSearchOpen(true)} />

      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <BackToTopButton />
      <VerticalProgressNav />

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
