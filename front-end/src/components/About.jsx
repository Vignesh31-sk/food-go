import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>We are passionate about serving great food!</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
