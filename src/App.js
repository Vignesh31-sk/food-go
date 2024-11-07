import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";
import PaymentPage from "./components/PaymentPage";
import Menu from "./components/Menu"; // Import Menu component
import About from "./components/About"; // Import About component

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
    <div>
      <Navbar />
      <HeroText />

      {/* Define Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "20px",
              }}
            >
              {foodItems.map((item, index) => (
                <FoodCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
