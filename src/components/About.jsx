import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      data-aos="flip-left"
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {icon && (
          <>
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
          </>
        )}

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div
        data-aos="fade-right"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a smart, hardworking person and very eager to learn. I love solving
        problems, I am accustomed to traveling a lot and speak multiple
        languages which allows me to mix and work well with others. I am very
        passionate about everything I do and take pride in what I do. I have 5
        years of coding experience which I have acquired via self-learning,
        tertiary institutions and multiple work environments. I find coding very
        interesting and believe it is my super power. I am well experienced in
        coding and able to work well with others.
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
