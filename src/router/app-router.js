import React from "react";

import Navbar from "../components/pages/Navbar";
import Home from "../components/pages/Home";
import HomeMenuSection from "../components/pages/HomeMenuSection";
import Footer from "../components/pages/Footer";
import Login from "../components/pages/login";
import Signup from "../components/pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuItemCard from "../components/pages/MenuItemCard";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <HomeMenuSection />
      <Footer />
    </>
  );
}

function MenuPage() {
  return (
    <>
      <Navbar />
      <MenuItemCard />
      <Footer />
    </>
  );
}
function LoginPage() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}
export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/food-crunch" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homeMenuSection" element={<HomeMenuSection />} />
      </Routes>
    </BrowserRouter>
  );
}
