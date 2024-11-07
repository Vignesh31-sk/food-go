import React from "react";
import { Routes, Route } from "react-router-dom";
import PaymentPage from "./components/PaymentPage";
import Menu from "./components/Menu"; // Import Menu component
import About from "./components/About"; // Import About component
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
