import { motion } from "framer-motion";
import { metame } from "../assets";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute hidden lg:flex inset-0 lg:top-[120px] top-20   max-w-7xl mx-auto px-4  flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-5 h-5 rounded-full bg-blue-300" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h2 className={` text-white lg:text-7xl text-2xl font-bold`}>
            Hi, I'm <span className="text-blue-300 ">Kannemeyer</span>
          </h2>
          <p className={` mt-4 text-white-100`}>
            I am a full stack developer
            <br className="sm:block hidden" />I create websites, web apps and
            native applications.
          </p>
        </div>
      </div>
      <div className="hidden lg:block h-full	">
        <ComputersCanvas />
      </div>
      <div className="w-full lg:hidden absolute bottom-[20%]  ">
        <div  className="w-full flex justify-center flex-col text-start">
          {" "}
          <img data-aos="fade-right"  src={metame} className="mb-10 md:mt-20 md:h-[400px] md:w-[400px] w-full "/>
          <h2 data-aos="fade-left" className={` text-white ml-4 lg:text-7xl text-2xl font-bold`}>
            Hi, I'm <span className="text-blue-300 ">Kannemeyer</span>
          </h2>
          <p data-aos="fade-up" className={` mt-4 ml-4 text-white-100 mx-2`}>
            I am a full stack developer that create websites, web apps and native
            applications.
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 lg:bottom-32 w-full flex justify-center items-center">
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
