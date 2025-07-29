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
          I am a Computer Science graduate from DHA Suffa University, currently working as an AI Engineer with hands-on experience in Machine Learning, NLP, Computer Vision, and backend development using FastAPI and PyTorch. I specialize in building intelligent, scalable systems and deploying AI models for real-world applications.
          <br/>
          Actively involved in cutting-edge AI trends, I work with Generative AI, Retrieval-Augmented Generation (RAG), Agentic AI, and frameworks like LangChain to build autonomous, context-aware agents and LLM-integrated backends.
          <br/>
          Alongside my professional work, I pursue research in AI and Computer Graphics, always striving to innovate and stay ahead in the evolving AI landscape. I am now open to new opportunities in both applied AI engineering and research collaborations that challenge my skills and drive impact.
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
