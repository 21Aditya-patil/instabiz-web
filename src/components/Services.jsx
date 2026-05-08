import React from "react";
import SERVICES from "../Data/serviceData";

import { motion } from "framer-motion";

function Services() {

  return (
    <section
      id="services"
      className="pt-14 min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40"
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col items-center justify-center pb-10 text-center"
      >

        <h1 className="text-3xl md:text-5xl font-bold">
          Our Core Services
        </h1>

        <p className="text-gray-500 text-sm md:text-xl mt-4">
          End-to-end digital solutions tailored to your business needs.
        </p>

      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {SERVICES.map((item, index) => (
          <motion.div
            key={item.title}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: index * 0.0,
            }}

            viewport={{ amount: 0.2 }}

            whileHover={{
              y: -8,
            }}

            className="bg-black/20 border border-purple-500/30 p-6 rounded-2xl backdrop-blur-2xl hover:border-purple-300 transition-all duration-300 cursor-pointer"
          >

            <div className="flex flex-col items-start gap-4">

              <div className="bg-purple-600/20 border border-purple-500/20 p-3 rounded-2xl">

                <item.icon
                  size={24}
                  className="text-purple-300"
                />

              </div>

              <p className="text-2xl font-bold">
                {item.title}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Services;