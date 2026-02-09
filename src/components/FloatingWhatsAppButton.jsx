import React from "react";
import { whatsapp } from "../assets";
const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
        draggable="false"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
