import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

function Industries() {
  const INDUSTRIES = [
    "Healthcare",
    "Real Estate",
    "Transportation",
    "Consultancy Services",
    "BPO & Call Centers",
    "Manufacturing",
    "Education",
    "Hospitality",
    "eCommerce",
    "Fintech",
    "Government Services",
    "SaaS Startups",
  ];

  return (
    <section
      id="industries"
      className="pt-24 min-h-screen flex justify-center items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex-col gap-14 md:gap-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.2 }}
        className="flex justify-center items-center flex-col text-center gap-2 md:gap-3"
      >
        <p className="text-sm md:text-xl text-red-500 tracking-wide">SECTORS</p>

        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Industries We Serve
        </h1>
      </motion.div>

      <div className="flex gap-4 flex-wrap items-center justify-center max-w-6xl">
        {INDUSTRIES.map((industry) => (
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            viewport={{ amount: 0.2 }}
            key={industry}
            className="bg-white/10 backdrop-blur-lg px-4 md:px-5 py-2 md:py-3 rounded-3xl border border-white/10 hover:border-red-600/40 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-red-600/10 text-sm md:text-base text-center"
          >
            {industry}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default Industries;
