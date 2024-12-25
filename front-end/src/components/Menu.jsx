import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Menu() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Our Menu</h2>
        <p>Explore our delicious offerings!</p>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
