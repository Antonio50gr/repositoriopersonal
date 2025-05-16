import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return ( 
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 bg-transparent">
      <div className="flex flex-col lg:flex-row">
        {/* Contenedor del texto */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start bg-transparent">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bg-transparent"
          >
            Antonio García Rodríguez
          </motion.h1>

          <motion.span  
            variants={container(0.5)}
            initial="hidden"
            animate="visible" 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent bg-transparent"
          >
            Full Stack Developer
          </motion.span>

          <motion.p  
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-2xl bg-transparent"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Botón para descargar el CV */}
          <motion.a
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            href="/CV-Antonio-Garcia.pdf"
            download
            className="mt-4 inline-block rounded-xl border border-yellow-400 bg-neutral-900 px-6 py-3 text-xl font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Descargar CV
          </motion.a>
        </div>
        
        {/* Contenedor de la imagen más ancho */}
        <div className="w-full lg:w-[60%] lg:p-8 flex justify-center lg:justify-end bg-transparent">
          <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="profilePic"
            className="rounded-xl object-cover w-full max-w-[600px] h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
