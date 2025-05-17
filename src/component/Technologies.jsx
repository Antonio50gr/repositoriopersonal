import { RiReactjsLine } from 'react-icons/ri';
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial:{ y: -10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease: "linear",
      repeat:Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return ( 
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-5xl sm:text-7xl"
      >
        Tecnologías
      </motion.h1>
      
      <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4 px-4"
      >
        {[{
          Icon: RiReactjsLine,
          color: 'text-cyan-400',
          duration: 2.5,
        },{
          Icon: FaPhp,
          color: 'text-blue-700',
          duration: 3,
        },{
          Icon: IoLogoJavascript,
          color: 'text-yellow-500',
          duration: 5,
        },{
          Icon: FaLaravel,
          color: 'text-red-600',
          duration: 2,
        },{
          Icon: FaAws,
          color: 'text-orange-500',
          duration: 6,
        },{
          Icon: RiTailwindCssFill,
          color: 'text-cyan-500',
          duration: 4,
        },{
          Icon: FaNodeJs,
          color: 'text-green-600',
          duration: 7,
        },{
          Icon: FaBootstrap,
          color: 'text-blue-600',
          duration: 2.5,
        }].map(({Icon, color, duration}, i) => (
          <motion.div 
            key={i}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <Icon className={`text-4xl sm:text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
