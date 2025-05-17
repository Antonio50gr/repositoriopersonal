import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-7xl">
        Sobre <span className="text-neutral-500">Mí</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <img className="rounded-2xl max-w-full h-auto" src={aboutImg} alt="about" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <p className="my-4 px-8 max-w-3xl text-2xl leading-relaxed">
            {ABOUT_TEXT.split('\n').map((line, i) => (
              <span key={i} className="block mb-4">{line.trim()}</span>
            ))}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
