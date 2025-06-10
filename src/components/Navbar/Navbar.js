import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const menuItems = [
    { id: "about", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-[#0a0a23] bg-gray-200 text-black sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto py-3 flex justify-between items-center">
        <div className="text-left">
          <h1
            style={{
              fontSize: "1.95rem",
              fontWeight: "bold",
              marginBottom: 0,
            }}
          >
            ROOPESH SRINIVASA
          </h1>
        </div>
        <ul className="flex flex-wrap justify-end items-center gap-1 text-sm sm:text-base">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer py-2 px-4 rounded-md transition duration-300 hover:bg-black hover:text-gray-200 font-semibold"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
