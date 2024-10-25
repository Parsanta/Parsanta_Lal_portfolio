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
    <section
      className=" relative min-h-screen flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay: 0.3 },
        }}
        className="container mx-auto px-4 md:px-8"
      >
        <h2 className="text-5xl  font-bold mb-5 text-white-700 arimo">
          ABOUT ME
        </h2>

        <p
          className={`text-gray-400 font-nunito text-lg mb-5 ${
            isSmallScreen && !showMore ? "line-clamp-5" : ""
          }`}
        >
          I am currently pursuing a Bachelor’s degree in Computer Science, now in my seventh semester at DHA Suffa University, with a strong focus on AI and Machine Learning. My journey includes hands-on projects in Natural Language Processing (NLP) and computer vision, where I am building a foundation for solving real-world challenges through intelligent, data-driven solutions.
          <br/>
          With a background in web development and the MERN stack, I bring an understanding of both user experience and advanced technology, integrating AI into interactive, user-centric applications.
          <br />
          Additionally, I am actively engaged in research across diverse domains, including Computer Graphics and Artificial Intelligence, fueling my curiosity and drive to contribute innovative solutions and push technological boundaries.
          <br />
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
            className="bg-transparent text-white font-nunito py-3 px-8 transition duration-300 mb-2 animate-border-glow"
          >
            <a href="#contact">Hire Me</a>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
