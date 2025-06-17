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
import Courses from "./components/Courses/Courses";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <hr className="border-2 border-gray-800 my-8 w-full" />
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
