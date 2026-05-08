import React, { useState } from "react";
import { motion } from "framer-motion";
import {FiMenu,FiX} from "react-icons/fi";

function Navbar() {

  const NAV_LINKS = [
  ["Services", "#services"],
  ["Products", "#products"],
  ["Portfolio", "#portfolio"],
  ["Technologies", "#technologies"],
  ["Industries", "#industries"],
  ["Contact", "#contact"],
];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-3xl border-b border-white/10">

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative flex justify-between items-center px-6 md:px-14 py-4">

        <a href="hero" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent cursor-pointer">
          INSTABIZ WEB
        </a>

        <div className="hidden xl:flex gap-8 text-lg items-center">

          {NAV_LINKS.map(([label, link], i) => (
            <a
              key={i}
              href={link}
              className="hover:text-blue-400 transition-all duration-300"
            >
              {label}
            </a>
          ))}

          <button className="bg-gradient-to-r from-purple-950 to-purple-500 shadow-lg shadow-purple-500/2 px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Get Started
          </button>

        </div>

        <button
          type="button"
          className="block xl:hidden text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {isOpen && (
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="xl:hidden min-h-screen bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center gap-8 px-6">

          {NAV_LINKS.map(([label, link], i) => (
            <a
              key={i}
              href={link}
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:text-blue-400 transition-all duration-300"
            >
              {label}
            </a>
          ))}

          <button className="bg-gradient-to-r from-purple-400 to-purple-700 px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer text-lg">
            Get Started
          </button>

        </motion.div>
      )}

    </nav>
  );
}

export default Navbar;