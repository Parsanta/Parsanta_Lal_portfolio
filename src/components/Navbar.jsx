import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-2 flex flex-col lg:flex-row items-center justify-between py-1"
    >
      <div className="flex items-center justify-between w-full lg:w-auto">
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
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#home"
          className="mb- lg:mb-0"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#about"
          className="mb-2 lg:mb-0"
        >
          About
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#skills"
          className="mb-2 lg:mb-0"
        >
          Skills
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#experience"
          className="mb-2 lg:mb-0"
        >
          Experience
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#projects"
          className="mb-2 lg:mb-0"
        >
          Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#projects"
          className="mb-2 lg:mb-0"
        >
          Certificates
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className="mb-2 lg:mb-0"
        >
          Contact
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
