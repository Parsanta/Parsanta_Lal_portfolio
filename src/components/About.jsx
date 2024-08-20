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
          I am currently pursuing a Bachelor’s degree in Computer Science, now
          in my seventh semester at DHA Suffa University, with a strong focus on
          both Web Development and Machine Learning. I have honed my skills in
          the MERN stack, enabling me to create responsive, user-centric
          interfaces that bring designs to life with precision and creativity.
          My expertise lies in developing visually appealing, highly functional
          websites that offer seamless user experiences.
          <br />
          My journey in Machine Learning, particularly in Natural Language
          Processing (NLP), is marked by a growing foundation built through
          hands-on projects. I am passionate about advancing my knowledge in NLP
          and am eager to apply my skills to solve real-world challenges. My
          curiosity and dedication drive me to explore new frontiers in this
          dynamic field.
          <br />
          In addition to my technical pursuits, I am actively engaged in
          research across diverse domains, including Computer Graphics and
          Artificial Intelligence. This broad research experience allows me to
          stay at the forefront of technological advancements, where I seek to
          contribute innovative solutions and push the boundaries of what’s
          possible.
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
