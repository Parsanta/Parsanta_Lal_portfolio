import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../components/glow.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className=" relative min-h-screen flex items-center justify-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3 } }}
        className="container mx-auto px-4 md:px-8"
      >
        <h2 className="text-4xl md:text-4xl font-bold mb-5 text-white-700 righteous-regular">
          ABOUT ME
        </h2>

        <p
          className={`text-gray-300 righteous-regular text-lg mb-5 ${isSmallScreen && !showMore ? "line-clamp-5" : ""}`}
        >
          I'm a passionate Flutter developer with experience in creating amazing
          apps. I specialize in mobile app development and have worked on
          various projects using Flutter. My goal is to deliver high-quality
          solutions that meet client requirements and exceed expectations. I'm a
          passionate Flutter developer with experience in creating amazing apps.
          I specialize in mobile app development and have worked on various
          projects using Flutter. My goal is to deliver high-quality solutions
          that meet client requirements and exceed expectations. I'm a passionate
          Flutter developer with experience in creating amazing apps. I'm a
          passionate Flutter developer with experience in creating amazing apps.
          I specialize in mobile app development and have worked on various
          projects using Flutter. My goal is to deliver high-quality solutions
          that meet client requirements and exceed expectations. I'm a passionate
          Flutter developer with experience in creating amazing apps.
        </p>

        {isSmallScreen && (
          <button
            onClick={toggleShowMore}
            className="text-gray-500 text-lg  focus:outline-none mb-5"
          >
            ...{showMore ? "read Less" : "read More"}
          </button>
        )}

        <div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "purple" }}
            whileTap={{ scale: 0.55 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-transparent text-white righteous-regular font-bold py-3 px-8 transition duration-300 mb-2 animate-border-glow"
            
          >
            <a href="#contact">Hire Me</a>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
