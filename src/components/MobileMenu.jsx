import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg text-purple-600 hover:bg-purple-100"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#services" className="hover:text-purple-600 transition">Services</a>
            <a href="#locations" className="hover:text-purple-600 transition">Locations</a>
            <a href="#portfolio" className="hover:text-purple-600 transition">Portfolio</a>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;