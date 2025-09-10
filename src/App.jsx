import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/Aboutme";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
