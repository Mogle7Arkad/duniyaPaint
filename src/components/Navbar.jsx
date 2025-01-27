import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold text-purple-600">
          Duniya Finishes
        </a>
      </div>
    </header>
  );
};

export default Navbar;