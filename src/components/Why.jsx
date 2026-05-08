import React from "react";
import {
  FiZap,
  FiCpu,
  FiShield,
  FiCloud,
  FiAward,
  FiBarChart2,
} from "react-icons/fi";
import { easeInOut, easeOut, motion } from "framer-motion";

function Why() {
  const WHY = [
    {
      icon: FiZap,
      title: "Innovation-Driven",
      desc: "Modern, scalable, future-ready digital products.",
    },
    {
      icon: FiCpu,
      title: "AI-Powered",
      desc: "Intelligent automation integrated into every workflow.",
    },
    {
      icon: FiShield,
      title: "End-to-End",
      desc: "From idea to deployment and ongoing maintenance.",
    },
    {
      icon: FiCloud,
      title: "Scalable Architecture",
      desc: "Enterprise-grade reliability and performance.",
    },
    {
      icon: FiAward,
      title: "Industry Experience",
      desc: "Solutions delivered across international markets.",
    },
    {
      icon: FiBarChart2,
      title: "Custom Expertise",
      desc: "Fully tailored software for your business needs.",
    },
  ];

  return (
    <section className="pt-24 min-h-screen  px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex items-center flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col items-center mb-4 md:mb-10 gap-2"
      >
        <p className="text-yellow-500 text-sm md:text-xl">Why Us</p>
        <h1 className="text-2xl md:text-5xl font-bold">
          Why Choose Instabiz Web
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {WHY.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            viewport={{ amount: 0.2 }}
            key={item.title}
            className="bg-black/20 border border-yellow-500 p-6 m-2 rounded-2xl backdrop-blur-2xl hover:border-white hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-start gap-2">
              <div className="bg-yellow-500/20 backdrop-blur-lg p-2 rounded-2xl">
                <item.icon
                  size={22}
                  className="font-bold hover:scale-130 transform-all duration-300"
                />
              </div>
              <p className="text-2xl font-bold">{item.title}</p>

              <p className="text-gray-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Why;
