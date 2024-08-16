import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaBootstrap,
  FaRust,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTailwindCss, BiLogoFirebase, BiLogoFigma } from "react-icons/bi";

const skillsData = [
  { icon: <FaRust />, className: "text-7xl text-cyan-100" },
  { icon: <BiLogoFigma />, className: "text-7xl text-cyan-100" },
  { icon: <BiLogoFirebase />, className: "text-7xl text-cyan-100" },
  { icon: <BiLogoFigma />, className: "text-7xl text-cyan-100" },
  { icon: <BiLogoTailwindCss />, className: "text-7xl text-cyan-100" },
  { icon: <FaBootstrap />, className: "text-7xl text-cyan-100" },
  { icon: <FaHtml5 />, className: "text-7xl text-cyan-100" },
  { icon: <FaCss3 />, className: "text-7xl text-cyan-100" },
  { icon: <FaJava />, className: "text-7xl text-cyan-100" },
  { icon: <FaReact />, className: "text-7xl text-cyan-100" },
  { icon: <IoLogoJavascript />, className: "text-7xl text-cyan-100" },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: 0.3 },
      }}
      className="container mx-auto px-4 md:px-8"
      id="skills"
    >
      <div className="border-b border-gray-800 pb-20">
        <h1 className="my-20 text-center text-4xl">Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.55 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="rounded-2xl border-4 border-nuetral-800 p-4 bg-transparent font-bold transition duration-300 mb-2 animate-border-glow"
            >
              {React.cloneElement(skill.icon, { className: skill.className })}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
