import React from "react";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div>
      <div className="wave-background"></div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Resume />
      <Footer />
    </div>
  );
}
