import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import contactImg from "../assets/img/contactImg.png";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative min-h-screen flex items-center justify-center text-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3 } }}
            className="flex-grow lg:w-1/2 bg-transparent py-12 px-8 text-center lg:border-r-4 border-purple-700"
          >
            <img src={contactImg} alt="Vector" className="mx-auto w-3/4 lg:w-2/3" />
            <h2 className="text-3xl font-bold mt-8">Contact Us</h2>
            <p className="mt-4 text-gray-300">Feel free to get in touch with me.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.5 } }}
            className="flex-grow lg:w-1/2 bg-transparent py-12 px-8 text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold mb-8">Send me a Message or Email to collaborate</h2>
            <p className="text-gray-300">Email: Parsantarajpal123@gmail.company</p>
            <p className="text-gray-300">Contact: +923483607136</p>
            <p className="text-gray-300">Karachi, Pakistan</p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <motion.a whileHover={{ scale: 1.2, backgroundColor: "purple" }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin size={30} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.behance.net" className="text-gray-400 hover:text-white">
                <FaBehance size={30} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.github.com" className="text-gray-400 hover:text-white">
                <FaGithub size={30} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
