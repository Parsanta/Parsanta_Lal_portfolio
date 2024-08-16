import { PROJECTS } from "./Data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="border-b border-gray-800 pb-12" id="projects">
      <h1 className="my-20 text-center text-4xl font-bold text-gray-200">
        Projects
      </h1>
      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:items-start ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={project.image}
                className="w-32 h-32 object-cover rounded-lg shadow-lg lg:w-48 lg:h-48"
                alt={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
            </a>
            <motion.div
              className="mt-4 lg:mt-0 lg:ml-8 lg:mr-8 max-w-xl text-center lg:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h6 className="mb-2 text-xl font-semibold text-gray-100">
                {project.title}
              </h6>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    whileHover={{ scale: 1.1, backgroundColor: "purple" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    key={techIndex}
                    className="bg-transparent text-white font-bold py-2 md:py-3 px-4 md:px-8 mr-2 md:mr-4 mb-2 animate-border-glow"
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
