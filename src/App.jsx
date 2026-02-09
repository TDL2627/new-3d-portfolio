import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
//useEffect

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, FloatingWhatsAppButton } from "./components";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-black lg:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <FloatingWhatsAppButton />
        <footer className="bg-black py-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="mt-2"> Cape Town, South Africa</p>
          <a target="_blank" className="mt-4 underline text-right" href={"https://github.com/TDL2627"}>Created by TDL2627</a>
        </div>
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
