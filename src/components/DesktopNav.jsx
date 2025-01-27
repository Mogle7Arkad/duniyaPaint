const DesktopNav = () => {
    return (
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-purple-600 transition">
          Home
        </a>
        <a href="#services" className="hover:text-purple-600 transition">
          Services
        </a>
        <a href="#projects" className="hover:text-purple-600 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-600 transition">
          Contact
        </a>
      </nav>
    );
  };
  
  export default DesktopNav;