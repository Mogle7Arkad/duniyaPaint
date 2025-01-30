import React from "react";
import { Menu } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="flex items-center gap-1 text-2xl font-bold text-purple-400">
            <img className="h-12 w-12" src="../assets/painting-home-svgrepo-com.svg" alt="" />
          Duniya Finishes
        </a>
        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;