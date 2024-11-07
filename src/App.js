import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";
import PaymentPage from "./components/PaymentPage";
import Menu from "./components/Menu"; // Import Menu component
import About from "./components/About"; // Import About component
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const foodItems = [
    {
      name: "Pizza",
      description: "Cheesy and delicious",
      imageUrl: "pizza.png",
    },
    { name: "Burger", description: "Juicy and tasty", imageUrl: "pizza.png" },
    { name: "Pasta", description: "Creamy and savory", imageUrl: "pizza.png" },
    { name: "Salad", description: "Fresh and healthy", imageUrl: "pizza.png" },
  ];

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
