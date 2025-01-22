import React from "react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import profile from "../assets/img/profile-pic.png";
import { motion, AnimatePresence } from "framer-motion";
import "../components/glow.css";

export default function HeroSection() {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1Rne0iEEu9arVDxfDHPrgPhYFIDs0x06_/view?usp=sharing";
  };

  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const toRotate = ["Hello There,I'm"];
  const [text, setText] = React.useState("");
  const period = 1000;
  const [delta, setDelta] = React.useState(100 - Math.random() * 400);

  React.useEffect(() => {
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
    <section className=" py-18 lg:mt-20 relative min-h-screen overflow-hidden flex items-center justify-center" id="home">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between">
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
            className="md:w-2/5 text-center md:text-left mb-4 md:mb-0"
          >
            <h1 className="text-4xl mb-2 text-white-700 sarina-regular">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 500, damping: 30 }}
                className="inline-block"
              >
                {text}✏️ <br/>
                
              </motion.span>
            </h1>
            <p className="font-bold text-6xl mb-2 text-purple-400 font-montserrat">Parsanta Lal</p>
            <p className="text-gray-400 text-md mb-4 font-nunito" onClick={handleDownload}>
            I'm an AI and Machine Learning developer working on NLP and computer vision projects to build intelligent, innovative solutions. With a background in web development, I can integrate advanced AI technologies into user experiences, blending front-end creativity with data-driven intelligence.
            </p>
            <div className="flex md:justify-start justify-center items-center md:items-end gap-4 text-3xl mb-6">
                <a
                  href="https://www.linkedin.com/in/parsanta-rajpal/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-700 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Parsanta"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-700 transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.behance.net/parsantarajpal"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-700 transition duration-300"
                >
                  <FaBehance />
                </a>
              </div>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "purple" }}
              whileTap={{ scale: 0.55}}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-transparent text-white font-nunito py-3 px-8 transition duration-300 mb-2 animate-border-glow"
              onClick={handleDownload}
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
            className="md:w-3/5 relative flex flex-col items-center md:items-end justify-center"
          >
           
            
            <div className="flex flex-col items-center left-5 bottom-5 md:items-center relative z-10">
              <motion.img
                src={profile}
                alt="Profile"
                className="w-85 h-auto mb-6 animate-fadeIn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              />
              
              {/* <a
                href="#about"
                className="text-white-500 hover:text-white-700 transition duration-300 block mt-2"
              >
                <BsMouse className="text-4xl" />
              </a> */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
