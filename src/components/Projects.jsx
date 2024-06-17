import React from "react";
import Fyde from "../assets/Fyde.jpg";
import Vise from "../assets/Vise.jpg";
import PBFront from "../assets/PB-Front.jpg";
import Frame from "../assets/Frame.jpg";
import Ochi from "../assets/Ochi.png";
import Clutch from "../assets/Clutch.png";
import Academy from "../assets/Academy.png";
import { motion, useAnimation } from 'framer-motion'
import {Power4} from "gsap";


function Projects() {
  const data = [
    {
      name: "Fyde",
      img: Fyde,
    },
    {
      name: "Vise",
      img: Vise,
    },
    {
      name: "Frame",
      img: Frame,
    },
    {
      name: "Premium Blend",
      img: PBFront,
    },
  ];

const cards = [useAnimation(), useAnimation()];

const handleHover = (index)=>{
cards[index].start({y: "0"});
};

const handleHoverEnd = (index)=>{
cards[index].start({y:"100%"});
}

  return (
    <div className="w-full bg-white  rounded-tl-2xl rounded-tr-2xl mb-10 ">
      <div className="p-10">
        <h1
          className="text-[3.9vw] font-[NeueMontreal-Regular] leading-none 
                text-[#212121] pt-14"
        >
          Featured projects
        </h1>
      </div>
      <hr className="w-full border-zinc-400 " />

      <div className='px-8'>
                <div className="cards w-full md:flex gap-10 mt-20">

                    <motion.div 
                    onHoverStart={()=>handleHover(0)}
                    onHoverEnd={()=>handleHoverEnd(0)}
                    className="cardcontainer relative w-full h-[auto] py-10">
                        <h1 className='flex items-center overflow-hidden absolute text-8xl text-[#CDEA68] md:left-full left-32 -translate-x-1/3 top-1/2 -translate-y-1/2 z-[9]'>
                        {"FYDE".split('').map((item, index)=>(<motion.span 
                        className='inline-block'
                        initial={{y: "100%"}}  
                        animate={cards[0]}
                        transition={{ease: Power4.easeInOut, delay:index*.08 }}
                        >{item}</motion.span>))}
                        </h1>
                        <div className="cards w-full h-full rounded-2xl overflow-hidden">
                            <img className="w-full h-full bg-cover"src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                    onHoverStart={()=>handleHover(1)}
                    onHoverEnd={()=>handleHoverEnd(1)}
                     className="cardcontainer relative w-full h-[auto] py-10">
                    <h1 className='flex overflow-hidden absolute text-8xl text-[#CDEA68] md:right-full translate-x-1/2 top-1/3 translate-y-1/3 z-[9]'>
                    {"VISE".split('').map((item, index)=>(<motion.span 
                        className='inline-block' 
                        initial={{y: "100%"}} 
                        animate={cards[1]}
                        transition={{ease: Power4.easeInOut, delay:index*.08 }}
                        >{item}</motion.span>))}
                    </h1>
                        <div className="cards w-full h-full rounded-2xl overflow-hidden">
                            <img className="w-full h-full bg-cover"src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                    
                </div>
            </div>

      <div className="flex justify-center items-center mt-12">
        <button
          className="text-[0.9rem] bg-[#212121] text-zinc-100 uppercase font-[NeueMontreal-Regular]
                     py-5 px-7 rounded-full flex justify-center items-center gap-6 mt-2 leading-none tracking-tight"
        >
          View All Case Studies
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>

      <hr className="w-full border-zinc-400 mt-10" />

      <div className="md:grid grid-cols-12 top-20 gap-3 pt-28 pb-52 mx-6">
        <div className=" relative h-[60vh] col-span-6 bg-[#004D43] rounded-xl mb-12">
          <img
            className=" w-40 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Ochi}
            alt="Ochi-Logo"
          />
          <span className="absolute left-6 rounded-full border-[1px] px-3 py-1 text-sm border-[#CDEB69] text-[#CDEB69] bottom-6 tracking-tighter">
            &copy;2019-2024
          </span>
        </div>
        <div className="relative h-[60vh] col-span-3 bg-[#212121] rounded-xl mb-12">
          <img
            className=" w-36 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Clutch}
            alt="Clutch-Logo"
          />
          <button className="absolute bg-transparent border-[1px] rounded-full bottom-6 left-6 text-zinc-100 px-3 py-1 text-sm uppercase tracking-tighter">
            Rating 5.0 On Clutch
          </button>
        </div>
        <div className="relative h-[60vh] col-span-3 bg-[#212121] rounded-xl">
          <img
            className=" w-28 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Academy}
            alt="the-future-academy"
          />
          <button className="absolute bg-transparent border-[1px] rounded-full bottom-6 left-6 text-zinc-100 px-3 py-1 text-sm uppercase tracking-tighter">
            Buisness Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}


export default Projects;
