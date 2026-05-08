import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 min-h-screen px-4 md:px-10 flex flex-col items-center overflow-hidden"
    >
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl my-4 border border-purple-500/40 bg-purple-500/20 backdrop-blur-md px-4 py-2 text-sm md:text-base text-center z-10"
      >
        ✧ AI Powered Software Development
      </motion.div>

      <div className="flex flex-col gap-8 z-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center leading-tight"
          >
            Build the Future
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent text-center leading-tight"
          >
            with Instabiz Web
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm sm:text-xl md:text-2xl pt-4 text-gray-400 text-center leading-relaxed max-w-4xl mx-auto px-2"
          >
            AI automation, SaaS platforms, CRM systems, and scalable digital
            products for startups, enterprises, and global businesses.
          </motion.h4>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: easeInOut }}
            viewport={{ once: true }}
            className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-purple-950 to-purple-500 shadow-lg shadow-purple-500/2 rounded-xl text-lg md:text-xl cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Explore our work
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: easeInOut }}
            viewport={{ once: true }}
            className="w-full sm:w-auto py-3 px-6 bg-transparent border border-purple-900 rounded-xl text-lg md:text-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:border-purple-300"
          >
            View Services
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mt-10 mx-auto rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="py-6 px-4 text-center border-r border-b md:border-b-0 border-white/10 cursor-pointer hover:bg-black/10 transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-bold text-white">45+</h1>

            <p className="text-gray-400 mt-3 text-sm md:text-base">
              CRM Systems
            </p>
          </div>

          <div className="py-6 px-4 text-center border-b md:border-b-0 md:border-r border-white/10 cursor-pointer hover:bg-black/10 transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-bold text-white">12K+</h1>

            <p className="text-gray-400 mt-3 text-sm md:text-base">
              Scout Users
            </p>
          </div>

          <div className="py-6 px-4 text-center border-r border-white/10 cursor-pointer hover:bg-black/10 transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-bold text-white">10+</h1>

            <p className="text-gray-400 mt-3 text-sm md:text-base">Countries</p>
          </div>

          <div className="py-6 px-4 text-center cursor-pointer hover:bg-black/10 transition-all duration-300">
            <h1 className="text-2xl md:text-3xl font-bold text-white">100+</h1>

            <p className="text-gray-400 mt-3 text-sm md:text-base">
              Products Built
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
