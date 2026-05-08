import React, { useState } from "react";

import {
  MOBILE_PORTFOLIO,
  WEB_PORTFOLIO,
  SAAS_PORTFOLIO,
} from "../Data/portfolioData";

import {
  FiSmartphone,
  FiLayers,
  FiGlobe,
  FiExternalLink,
} from "react-icons/fi";

import { AnimatePresence, easeOut, motion } from "framer-motion";

function Portfolio() {
  const tabs = [
    ["mobile", "Mobile Apps"],
    ["saas", "SaaS & CRM"],
    ["web", "Websites"],
  ];

  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <section
      id="portfolio"
      className="pt-20 min-h-screen px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex justify-center items-center flex-col gap-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col justify-center items-center mb-6 text-center"
      >
        <p className="text-xl text-purple-600">Work</p>
        <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 w-full">
        {tabs.map(([key, label]) => (
          <motion.button
            key={key}
            type="button"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
            viewport={{ amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveTab(key)}
            className={`cursor-pointer min-w-[140px] px-5 py-2 rounded-3xl transition-all duration-300 ${
              activeTab === key
                ? "bg-violet-600 text-white"
                : "bg-white/5 text-white/50 hover:bg-white/10"
            }`}
          >
            <p>{label}</p>
          </motion.button>
        ))}
      </div>

      <div className="min-h-[500px] flex items-start justify-center w-full relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "mobile" && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full"
            >
              {MOBILE_PORTFOLIO?.map((item, index) => (
                <motion.a
                  key={item?.name}
                  href={item?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="bg-emerald-600/20 border border-emerald-600/40 p-6 rounded-2xl min-h-[220px] w-full backdrop-blur-2xl hover:border-purple-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-start gap-3 h-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="bg-emerald-600 p-3 rounded-xl">
                        <FiSmartphone size={22} />
                      </div>
                      <FiExternalLink size={16} className="text-white/30" />
                    </div>

                    <p className="text-2xl font-bold">{item?.name}</p>
                    <p className="text-white/70">{item?.cat}</p>
                    <p className="text-gray-400 mt-auto">{item?.stat}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

          {activeTab === "saas" && (
            <motion.div
              key="saas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full"
            >
              {SAAS_PORTFOLIO?.map((item, index) => (
                <motion.a
                  key={item?.name}
                  href={item?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="bg-orange-600/10 border border-orange-600/40 p-6 rounded-2xl min-h-[220px] w-full backdrop-blur-2xl hover:border-purple-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-start gap-3 h-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="bg-orange-600/40 p-3 rounded-xl">
                        <FiLayers size={22} />
                      </div>
                      <FiExternalLink size={16} className="text-white/30" />
                    </div>

                    <p className="text-2xl font-bold">{item?.name}</p>
                    <p className="text-white/70">{item?.cat}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

          {activeTab === "web" && (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full"
            >
              {WEB_PORTFOLIO?.map((item, index) => (
                <motion.a
                  key={index}
                  href={item?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="bg-blue-600/10 border border-blue-500/40 p-6 rounded-2xl min-h-[220px] w-full backdrop-blur-2xl hover:border-purple-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-start gap-3 h-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="bg-blue-500/40 p-3 rounded-xl">
                        <FiGlobe size={22} />
                      </div>
                      <FiExternalLink size={16} className="text-white/30" />
                    </div>

                    <p className="text-2xl font-bold">{item?.name}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Portfolio;
