import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function MarqueeEffect() {
  const { scroll } = useLocomotiveScroll();

  return (
    <div
      data-scroll
      data-scroll-speed="-0.2"
      className=" w-full rounded-tl-2xl rounded-tr-2xl bg-[#004D43] z-30 py-6 "
    >
      <hr className=" border-zinc-400 w-full relative md:top-[5rem]" />
      <Marquee speed={0}>
        <div className= "text-zinc-50 whitespace-nowrap flex gap-10 overflow-hidden">
          <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 3 }} className="text-[28vw] px-5 ml-10 uppercase font-[FoundersGrotesk-Semibold] leading-none ">
            We Are Ochi
          </motion.h1>
          <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 3 }} className="text-[28vw] px-5 uppercase font-[FoundersGrotesk-Semibold] leading-none ">
            We Are Ochi
          </motion.h1>
        </div>
      </Marquee>
      <hr className=" border-zinc-400 w-full relative md:bottom-[2.5rem] " />
    </div>
  );
}

export default MarqueeEffect;
