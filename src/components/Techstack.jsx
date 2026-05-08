import React from "react";

import TECHS from "../Data/techStackData";

import { motion } from "framer-motion";

function Techstack() {
  return (
    <section
      id="technologies"
      className="pt-14 min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col items-center mb-8 md:mb-20 text-center"
      >
        <p className="text-blue-600 text-sm md:text-xl">Stack</p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Technologies We Work With
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {TECHS.map((item, index) => (
          <motion.div
            key={item.cat}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ amount: 0.2 }}
            whileHover={{
              y: -8,
            }}
            className="bg-black/20 border border-blue-500/30 p-6 rounded-2xl backdrop-blur-2xl hover:border-purple-300 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-start gap-5 h-full">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600/20 border border-blue-500/20 backdrop-blur-lg p-3 rounded-xl">
                  <item.icon size={22} className="text-blue-300" />
                </div>

                <p className="text-2xl font-bold">{item.cat}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.items.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.04,
                    }}
                    viewport={{ amount: 0.2 }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-3 py-1 rounded-full text-xs md:text-sm bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Techstack;
