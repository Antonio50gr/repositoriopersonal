import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-8xl"
      >
        Proyectos
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-center">
                <div className="overflow-hidden rounded-xl shadow-lg border border-neutral-800">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-[300px] aspect-square object-cover"
                  />
                </div>
                <h6 className="mt-6 text-2xl font-semibold text-yellow-400">{project.title}</h6>
              </a>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 mt-8 lg:mt-0"
            >
              <p className="mb-6 text-xl text-neutral-400 leading-relaxed">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="mr-4 rounded bg-neutral-900 px-4 py-2 text-lg font-semibold text-yellow-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
