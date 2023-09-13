import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 lg:top-[120px] top-80   max-w-7xl mx-auto px-4 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-5 h-5 rounded-full bg-blue-300" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={` text-white lg:text-7xl text-2xl font-bold`}>
            Hi, I'm <span className="text-blue-300 ">Kannemeyer</span>
          </h1>
          <p className={` mt-4 text-white-100`}>
            I am a full stack developer
            <br className="sm:block hidden" />I create websites, web apps and
            applications.
          </p>
        </div>
      </div>
      <div className="hidden md:block h-full	">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
