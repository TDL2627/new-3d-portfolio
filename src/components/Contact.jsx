import React, { useRef, useState ,useEffect} from "react";
import { useForm, ValidationError } from "@formspree/react";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkvllle");
useEffect(()=>{

  if (state.succeeded) {
     alert("Message sent!")
  }
},state)
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        data-aos="fade-right"
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              required
              type="email"
              name="email"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows={7}
              name="message"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        data-aos="fade-left"
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
