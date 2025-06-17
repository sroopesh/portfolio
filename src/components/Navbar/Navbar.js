import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import "./Navbar.module.css";

const menuItems = [
  { id: "about", label: "Summary" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Download Resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 top-0 ${
        scrolled ? "bg-black/80 shadow-md" : "bg-black/30"
      } backdrop-blur-md transition duration-500`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold text-white tracking-widest cursor-pointer">
          ROOPESH SRINIVASA
        </h1>
        <ul className="hidden md:flex space-x-6 text-gray-100 font-semibold text-sm">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer relative group transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-white">
          <Menu onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur p-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="text-gray-100 py-2 border-b border-gray-700 cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
