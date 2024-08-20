import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [hoveredSection, setHoveredSection] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#skills", "#experience", "#projects", "#certificates", "#contact"];
      const offsets = sections.map(id => {
        const section = document.querySelector(id);
        return section ? section.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="top-1 lg:left-10 lg:fixed right-12 z-50  shadow-md flex flex-col lg:flex-row items-center justify-between py-1"
    >
      <div className="flex  items-center justify-between w-full lg:w-auto px-4">
        <img src={logo} alt="Logo" className="w-24 h-auto" />
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <rect x="4" y="9" width="12" height="2" />
            </svg>
          ) : (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <rect x="2" y="4" width="16" height="2" />
              <rect x="2" y="9" width="16" height="2" />
              <rect x="2" y="14" width="16" height="2" />
            </svg>
          )}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row items-center justify-center lg:gap-6 text-md`}
      >
        {["#home", "#about", "#skills", "#experience", "#projects", "#certifications", "#contact"].map((section) => (
          <motion.a
            key={section}
            whileHover={{ scale: 1.1 }}
            href={section}
            className="mb-2 lg:mb-0 lg:py-2 relative"
            onMouseEnter={() => setHoveredSection(section)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => setActiveSection(section)}
          >
            {section.replace("#", "").charAt(0).toUpperCase() + section.slice(2)}
            {(activeSection === section || hoveredSection === section) && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-700"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
