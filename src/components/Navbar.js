import React from 'react';

const Navbar = () => {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'resume', label: 'Resume' }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer py-2 px-3 rounded transition duration-200 hover:bg-white hover:text-blue-800 font-medium"
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
