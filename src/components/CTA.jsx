import React from "react";
import { easeInOut, motion } from "framer-motion";

function CTA() {
  return (
    <section className="min-h-screen pt-24 flex justify-center items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease:easeInOut }}
        viewport={{ amount: 0.2 }}
        className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-purple-600/20 to-black/30 backdrop-blur-xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20 flex flex-col items-center gap-6"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col items-center text-center gap-2 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Let's Build Something
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-500 leading-tight">
            Powerful Together
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-center text-gray-400 max-w-3xl leading-relaxed relative z-10">
          Whether you're a startup, enterprise, or consultancy — we transform
          ideas into scalable technology products.
        </p>

        <button className="relative z-10 bg-gradient-to-r from-purple-950 to-purple-500 px-6 md:px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer text-sm md:text-base shadow-lg shadow-purple-500/20">
          Start a Project
        </button>
      </motion.div>
    </section>
  );
}

export default CTA;
