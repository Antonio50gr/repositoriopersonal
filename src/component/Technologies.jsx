import { RiReactjsLine } from 'react-icons/ri';
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const Technologies = () => {
  return ( 
    <div className="border-b border-neutral-800 pb-24">
    <h1 className="my-20 text-center text-4xl">Tecnologías</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className='text-7xl text-blue-700'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript  className='text-7xl text-yellow-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel  className='text-7xl text-red-600'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className='text-7xl text-orange-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-cyan-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-600'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className='text-7xl text-blue-600'/>
            </div>
        </div>
    </div>
    );
}

export default Technologies