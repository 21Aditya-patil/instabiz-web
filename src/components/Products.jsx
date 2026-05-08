import React from "react";

import PRODUCTS from "../Data/productData";

import { FiArrowRight, FiExternalLink } from "react-icons/fi";

import { motion } from "framer-motion";

function Products() {
  return (
    <section
      id="products"
      className="pt-14 min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col items-center pb-10 text-center"
      >
        <p className="font-bold md:pb-2 text-md text-purple-500">Products</p>

        <h1 className="text-3xl md:text-5xl font-bold">Our Own Platforms</h1>

        <p className="text-gray-500 text-sm md:text-xl">
          Live products powering thousands of businesses worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {PRODUCTS.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ amount: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-black/20 border border-purple-500/30 p-6 rounded-2xl backdrop-blur-2xl hover:border-purple-300 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-start gap-4 h-full">
              <div className="flex items-center justify-between w-full">
                <div
                  className={`bg-gradient-to-br ${item.color} p-3 rounded-2xl`}
                >
                  <item.icon size={24} />
                </div>
                <FiExternalLink size={16} className="text-white/30" />
              </div>

              <div className="flex w-full justify-between items-center gap-4">
                <p className="text-2xl font-bold">{item.name}</p>

                <span className="bg-white/10 px-3 py-1 backdrop-blur-lg text-sm rounded-2xl border border-white/10">
                  {item.stat}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </motion.a>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ amount: 0.2 }}
          whileHover={{ y: -8 }}
          className="bg-black/20 border border-purple-500/30 p-6 rounded-2xl backdrop-blur-2xl hover:border-purple-300 transition-all duration-300 flex justify-center items-center cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className="bg-purple-500 p-3 rounded-2xl"
            >
              <FiArrowRight className="font-bold" />
            </motion.div>

            <p className="text-2xl font-bold">More Products</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Products;
