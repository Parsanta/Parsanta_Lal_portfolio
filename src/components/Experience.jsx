import { EXPERIENCES } from "./Data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="border-b border-gray-800 pb-4" id="experience">
      <h1 className="my-20 text-center text-4xl"> Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 righteous-regular font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-600">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    whileHover={{ scale: 1.1, backgroundColor: "purple" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    key={index}
                    className="bg-transparent text-white righteous-regular font-bold py-2 md:py-3 px-4 md:px-8 mr-2 md:mr-4 mb-2 animate-border-glow"
                    style={{ fontSize: "0.75rem", lineHeight: "1.5" }} 
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
