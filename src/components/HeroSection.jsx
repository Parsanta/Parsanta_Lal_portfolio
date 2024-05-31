import React from "react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import banImg from "../assets/img/Me.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../components/glow.css";
export default function HeroSection() {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1-9Foc2jhwwudb-d-NEfho8CwK091bW6Y/view?usp=sharing";
  };
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Hello!! I am Parsanta Lal"];
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(100 - Math.random() * 400);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden" id="home">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        <AnimatePresence>
          <motion.div
            key="left-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.3 },
            }}
            exit="initial"
            className="md:w-1/2 text-center md:text-left mb-4 md:mb-0"
          >
            <h1 className="font-bold text-6xl mb-2 text-white-900 font-nunito">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 500, damping: 30}}
                className="inline-block"
              >
                {text}
              </motion.span>
            </h1>
            <p className="text-gray-400 text-lg mb-4" onClick={handleDownload}>
              I'm a ReactJs developer, Passionate about web development and
              creativity in JavaScript development and development of React
              components.
            </p>
            <motion.button
              whileHover={{ scale: 1.1,backgroundColor: "purple" }}
              whileTap={{ scale: 0.55 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-transparent text-white font-bold py-3 px-8 transition duration-300 mb-2 animate-border-glow"
              href="#contact"
            >
              Resume
            </motion.button>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key="right-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.3 },
            }}
            exit="initial"
            className="md:w-1/2 text-center md:text-right pl-10"
          >
            <div className="flex flex-col items-center justify-center md:justify-end mb-4">
              <motion.img
                src={banImg}
                alt="banner image"
                className="w-40 h-auto mb-3 mx-auto md:mx-0 animate-fadeIn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              />
              <div className="flex justify-center md:justify-end mb-6 items-center gap-4 text-2xl">
                <a
                  href="https://www.linkedin.com/in/joseph-hernandez-1992/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-700 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/joseph-hernandez"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-700 transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.behance.net/josephhernandez"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-700 transition duration-300"
                >
                  <FaBehance />
                </a>
              </div>
              <a
                href="#about"
                className="text-white-500 hover:text-white-700 transition duration-300 block mt-2 mx-auto"
              >
                <BsMouse className="text-4xl" /> 
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
