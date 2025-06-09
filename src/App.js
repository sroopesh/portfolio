import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import StickyHeader from "./components/Stickyheader";

export default function App() {
  return (
    <div>
      <StickyHeader />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 font-sans">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Resume />
        <Footer />
      </main>
    </div>
  );
}
