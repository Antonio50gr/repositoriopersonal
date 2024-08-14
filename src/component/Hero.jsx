import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/Profile.jpg";

const Hero = () => {
  return ( 
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 bg-transparent">
      <div className="flex flex-col lg:flex-row">
        {/* Contenedor del texto */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start bg-transparent">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bg-transparent">
            Antonio García Rodríguez
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent bg-transparent">
            Full Stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter bg-transparent">
            {HERO_CONTENT}
          </p>
        </div>
        
        {/* Contenedor de la imagen */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end bg-transparent">
          <img src={profilePic} alt="profilePic" className="max-w-full h-auto bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
